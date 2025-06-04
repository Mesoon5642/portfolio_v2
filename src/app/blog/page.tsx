import path from "path";
import fs from 'fs';
import BlogEntry from "./BlogEntry";

type FileObj = {
    filename: string,
    date: string,
    title: string
}

export default async function Blog(){
    async function generateLinks() {
      const postsDir = path.join(process.cwd(), 'src/app/blog/_entries');
      const files = fs.readdirSync(postsDir);
      const result: FileObj[] = []
      files.forEach((file) => {
            const filePath = path.join(postsDir, file);
            const content = fs.readFileSync(filePath, 'utf-8');
            const lines = content.split(/\r?\n/).slice(0, 2);
            result.push({
                filename: file.replace(/\.md$/, ''),
                date: lines[0].substring(3),
                title: lines[1].substring(2)
            })
      })
      return result.map((fileobj) => (
        <div>
            <BlogEntry date={fileobj.date} title={fileobj.title} filename={fileobj.filename} />
            <hr></hr>
        </div>
      ));
    }
    const slugs = await generateLinks()
    return(
        <div className="p-5 m-5 border border-teal-200">
            <hr></hr>
            {slugs}
        </div>
    )
}