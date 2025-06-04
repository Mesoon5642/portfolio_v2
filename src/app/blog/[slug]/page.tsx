import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";
import rehypeRaw from 'rehype-raw'
import remarkImages from 'remark-images';
import * as React from 'react'


export function generateStaticParams() {
  const postsDir = path.join(process.cwd(), 'src/app/blog/_entries');
  const files = fs.readdirSync(postsDir);

  return files.map((fileName) => ({
    slug: fileName.replace(/\.md$/, ''),
  }));
}

export default function RenderMarkdown({ params }: { params: { slug: string } }){
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'src/app/blog/_entries', `${slug}.md`);
  const content = fs.readFileSync(filePath, 'utf-8');
  return(
        <div className="w-auto mt-20 mb-5 mx-5 text-wrap text-center">
            <ReactMarkdown
                remarkPlugins={[remarkGfm, remarkImages]}
                rehypePlugins={[rehypeRaw]}
                components={{
                a: ({ node, ...props }) => (
                    <a className="text-pink-400 underline underline-offset-4" target="_blank" {...props} />
                ),
                h1: ({ node, ...props }) => (
                    <h1 className="m-0 text-lg text-center md:text-xl font-bold" {...props} />
                ),
                h2: ({ node, ...props }) => (
                    <h2 className="m-0 text-emerald-500 text-lg text-center md:text-xl font-bold" {...props} />
                ),
                h4: ({ node, ...props }) => (
                    <h4 className="text-base text-emerald-500" {...props} />
                ),
                u: ({node, ...props}) => (
                    <u className="text-base underline underline-offset-2" {...props} />
                ),
                hr: ({node, ...props}) => (
                    <hr className="mx-10 my-5" {...props} />
                ),
                br: ({node, ...props}) => (
                    <br className="my-5" {...props} />
                ),
                img: ({node, ...props}) => (
                    <div className="flex items-center justify-center">
                        <img style={{borderStyle: "ridge"}} className="my-5 w-[80%] border-20 border-violet-600 object-contain" {...props} />
                    </div>
                ),
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    )
}