import { Blog } from "../hooks";
import { Appbar } from "./Appbar";
import { Avatar } from "./BlogCard";

export const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="grid w-full max-w-screen-xl grid-cols-1 px-10 pt-12 md:grid-cols-12">
          <div className="col-span-8">
            <div className="text-3xl font-extrabold md:text-5xl">
              {blog.title}
            </div>
            <div className="pt-2 text-slate-500">Posted on 12th March 2025</div>
            <div className="pt-4">{blog.content}</div>
          </div>
          <div className="col-span-4">
            <div className="mt-2 ml-2 text-lg md:ml-0 text-slate-600">Author</div>
            <div className="flex w-full md:ml-2">
              <div className="flex items-center justify-start px-4 mt-4 md:px-0 md:justify-between">
                <Avatar size="big" name={blog.author.name || "Anonymous"} />
              </div>
              <div className="flex flex-col items-start ml-3 md:items-start">
                <h3 className="text-lg font-semibold md:ml-1">
                  {blog.author.name || "Anonymous"}
                </h3>
                <p className="text-sm text-gray-600 md:ml-1">
                  Random catch phrase about the author's ability to grab the
                  user's attention
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
