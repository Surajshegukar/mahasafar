# # Install required library first:
# # pip install icrawler

# from icrawler.builtin import GoogleImageCrawler

# def download_images(query, num_images=5):
#     # Create a GoogleImageCrawler object
#     crawler = GoogleImageCrawler(storage={'root_dir': query.replace(' ', '_')})

#     # Start crawling (downloading) images
#     crawler.crawl(keyword=query, max_num=num_images)

# if __name__ == "_main_":
#     # Get user input
#     query = input("Enter what you want images of: ")
#     num = input("How many images to download? (default 5): ")

#     # If user entered a number, use it; else default to 5
#     num = int(num) if num.isdigit() else 10

#     # Call the download function
# download_images(query, num)

# Install required library first:
# pip install icrawler

from icrawler.builtin import GoogleImageCrawler

def download_images(query, num_images=5):
    # Create a GoogleImageCrawler object
    crawler = GoogleImageCrawler(storage={'root_dir': query.replace(' ', '_')})

    # Start crawling (downloading) images
    crawler.crawl(keyword=query, max_num=num_images)

if __name__ == "__main__":
    # Get user input
    temples = ["Shirdi Sai Baba Temple", "Siddhivinayak Temple", "Trimbakeshwar Temple", "Bhimashankar Temple", "Pandharpur Vitthal Temple", "Grishneshwar Temple", "Mumbadevi Temple", "Ashtavinayak Temples", "Jejuri Khandoba Temple", "Ekvira Aai Temple", "Shani Shingnapur Temple", "Parli Vaijnath Temple", "Mahalakshmi Temple", "Kopeshwar Temple", "Dagdusheth Halwai Ganapati Temple"]

    for mandir in temples:
        query = mandir
        num = ("6")

    # If user entered a number, use it; else default to 5
        num = int(num) if num.isdigit() else 10

    # Call the download function

        download_images(query, num)
