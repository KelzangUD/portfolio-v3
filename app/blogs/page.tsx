import CustomContainer from "../components/CustomContainer";
import Title from "@/components/ui/Title";
import { BlogCard } from "../components/BlogCard";
import { blogs } from "../data/blogs";

export default function ContactMe() {
  return (
    <CustomContainer>
      <section className="mt-20">
        <Title title="A space for thoughts, lessons, and little discoveries." />
        <span className="grid xl:grid-cols-2 gap-6 2xl:gap-8 my-5 md:my-15">
          {blogs?.map((blog) => (
            <BlogCard
              imageUrl={blog?.image}
              title={blog?.title}
              category={blog?.category}
              subtitle={blog?.subtitle}
              author={blog?.author}
              date={blog?.date}
              href={blog?.href}
              key={blog?.title}
            />
          ))}
        </span>
      </section>
    </CustomContainer>
  );
}
