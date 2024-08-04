/* eslint-disable @typescript-eslint/no-explicit-any */
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Fragment } from "react";
import { FaStar } from "react-icons/fa6";

const reviews = {
  average: 4,
  featured: [
    {
      id: 1,
      rating: 5,
      content: `
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eligendi praesentium fugit, dolore aut voluptate corporis quas! Quas dolore tempore deleniti aut facilis recusandae maiores, tenetur nesciunt placeat cupiditate molestiae excepturi atque, dolor corrupti aperiam necessitatibus labore debitis nisi nobis id obcaecati repellendus quos velit. Iste repudiandae dicta similique.</p>
        `,
      date: "July 16, 2024",
      datetime: "2024-07-16",
      author: "Emily Selman",
      avatarSrc:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    },
    {
      id: 2,
      rating: 5,
      content: `
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eligendi praesentium fugit, dolore aut voluptate corporis quas! Quas dolore tempore deleniti aut facilis recusandae maiores, tenetur nesciunt placeat cupiditate molestiae excepturi atque, dolor corrupti aperiam necessitatibus labore debitis nisi nobis id obcaecati repellendus quos velit. Iste repudiandae dicta similique..</p>
        `,
      date: "July 12, 2024",
      datetime: "2024-07-12",
      author: "Hector Gibbons",
      avatarSrc:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    },
  ],
};

const faqs = [
  {
    question: "What is your product?",
    answer: "Our product is a [product category] designed to [solve problem/fulfill need]."
  },
  {
    question: "Is there a free trial or demo available?",
    answer: "Yes, we offer a [free trial/demo] to help you experience our product."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We offer [types of support, e.g., email, phone, live chat]."
  },
  {
    question: "Is there a warranty or guarantee?",
    answer: "[Information about warranty or guarantee]."
  }
];

const license = {
  href: "#",
  summary: "Digital Product License",
  content: `
    <h4>Product Usage</h4>
    <p>This digital product is licensed for use by individual customers.</p>

    <h4>Scope of License</h4>
    <p>You may use this product for personal non-commercial use.</p>

    <h4>Restrictions</h4>
    <p>You may not resell, distribute, or modify the product without written permission.</p>

    <h4>Intellectual Property</h4>
    <p>All intellectual property rights in the product belong to [company name].</p>

    <h4>Disclaimer</h4>
    <p>The product is provided "as is" without warranty of any kind.</p>
  `,
};

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const ProductFeatures = () => {
  return (
    <div className="mx-auto mt-16 w-full max-w-2xl lg:col-span-4 lg:mt-0 lg:max-w-none">
      <TabGroup>
        <div className="border-b border-gray-200">
          <TabList className="-mb-px flex space-x-8">
            <Tab
              className={({ selected }) =>
                classNames(
                  selected
                    ? "border-indigo-600 text-indigo-600"
                    : "border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-800",
                  "whitespace-nowrap border-b-2 py-6 text-sm font-medium"
                )
              }
            >
              Customer Reviews
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  selected
                    ? "border-indigo-600 text-indigo-600"
                    : "border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-800",
                  "whitespace-nowrap border-b-2 py-6 text-sm font-medium"
                )
              }
            >
              FAQ
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  selected
                    ? "border-indigo-600 text-indigo-600"
                    : "border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-800",
                  "whitespace-nowrap border-b-2 py-6 text-sm font-medium"
                )
              }
            >
              License
            </Tab>
          </TabList>
        </div>
        <TabPanels as={Fragment}>
          <TabPanel className="-mb-10">
            <h3 className="sr-only">Customer Reviews</h3>

            {reviews.featured.map((review, reviewIdx) => (
              <div
                key={review.id}
                className="flex space-x-4 text-sm text-gray-500"
              >
                <div className="flex-none py-5">
                  <img
                    src={review.avatarSrc}
                    alt=""
                    className="h-10 w-10 rounded-full bg-gray-100"
                  />
                </div>
                <div
                  className={classNames(
                    reviewIdx === 0 ? "" : "border-t border-gray-200",
                    "py-5"
                  )}
                >
                  <h3 className="font-medium text-gray-900">{review.author}</h3>
                  <p>
                    <time dateTime={review.datetime}>{review.date}</time>
                  </p>

                  <div className="mt-2 flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <FaStar
                        key={rating}
                        className={classNames(
                          review.rating > rating
                            ? "text-yellow-400"
                            : "text-gray-300",
                          "h-5 w-5 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>

                  <div
                    className="prose prose-sm mt-2 max-w-none text-gray-500"
                    dangerouslySetInnerHTML={{ __html: review.content }}
                  />
                </div>
              </div>
            ))}
          </TabPanel>

          <TabPanel className="text-sm text-gray-500">
            <h3 className="sr-only">Frequently Asked Questions</h3>

            <dl>
              {faqs.map((faq) => (
                <Fragment key={faq.question}>
                  <dt className="mt-5 font-medium text-gray-900">
                    {faq.question}
                  </dt>
                  <dd className="prose prose-sm mt-2 max-w-none text-gray-500">
                    <p>{faq.answer}</p>
                  </dd>
                </Fragment>
              ))}
            </dl>
          </TabPanel>

          <TabPanel className="pt-5">
            <h3 className="sr-only">License</h3>

            <div
              className="prose prose-sm max-w-none text-gray-500"
              dangerouslySetInnerHTML={{ __html: license.content }}
            />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
};

export default ProductFeatures;
