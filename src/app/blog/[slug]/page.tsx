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

export default async function RenderMarkdown({ params }: { params: Promise<{ slug: string }> }){
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'src/app/blog/_entries', `${slug}.md`);
  const content = fs.readFileSync(filePath, 'utf-8');
  return(
        <div className="mt-20 mb-5 mx-5 text-wrap text-center">
            <ReactMarkdown
                remarkPlugins={[remarkGfm, remarkImages]}
                rehypePlugins={[rehypeRaw]}
                components={{
                a: ({ node, ...props }) => (
                    <a className="text-pink-400 underline underline-offset-4" target="_blank" {...props} />
                ),
                h1: ({ node, ...props }) => (
                    <h1 className="m-0 mb-5 text-lg text-center md:text-xl font-bold" {...props} />
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
                    <hr className="mb-10 my-5" {...props} />
                ),
                br: ({node, ...props}) => (
                    <br className="my-5" {...props} />
                ),
                img: ({node, ...props}) => (
                    <div className="flex items-center justify-center">
                        <img style={{borderStyle: "ridge"}} className="my-5 w-[100%] lg:w-[80%] border-2 lg:border-20 border-violet-600 object-contain" {...props} />
                    </div>
                ),
                ol: ({node, ...props}) => (
                    <ol style={{borderStyle: "ridge"}} className="my-5 p-5 border-2 border-violet-600 marker:text-emerald-500 list-decimal list-inside" {...props} />
                ),
                li: ({node, ...props}) => (
                    <li className="my-2" {...props} />
                ),
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    )
}