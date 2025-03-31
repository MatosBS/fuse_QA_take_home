
# Project Title
## How to run the test cases?
1. Clone the repo
2. Run `npm install`
3. Run `npm run cy:run`


# Test Cases
### User Story 1: Hotel Search & Filtering

As a user, I want to search for hotels in a specific city and apply filters, so that I can find a suitable place to stay.
Test Scenarios
- Searching for hotels in "New York" should display relevant results.  
- Selecting check-in and check-out dates should update availability.  
- Applying a "Guest Rating: 8+" filter should update results correctly.  
- Sorting by "Lowest Price" should reorder results as expected.  


1. Home - Search: validate making a valid search
User should be able to make valid searches

1.1 Go to Home page

1.2 Insert a valid string


1.3 Select valid dates

1.4 Click the Search Button

_Expected Result_

User should be redirected to the Search Page.

Location should be displayed correctly in the title.

Location should be displayed correctly in the breadcrumb.

Only hotels from the selected location should be displayed.

2. Search Results page: update Check-In and Checkout-Date
User should be able to change the dates in the Search page

2.1 Go to Home page

2.2. Insert a valid string

2.3. Select valid dates

2.4. Click the Search Button

2.5. Click on the Dates fields

2.6. Select a different field


_Expected Result_

Search page should be refreshed.

Request has been made with the correct new dates.


3. Search Results page: apply one Property rating filter
User should be able to select a filter in Property rating

3.1 Go to Home page

3.2 Insert a valid string

3.3 Select valid dates

3.4 Click the Search Button

3.5 In the Filter section, select an option in Property rating

Search page should be refreshed

Applied filter is displayed correctly


4. Search Results page: apply more than one Property rating filter
User should be able to select more than one filter in Property rating

4.1 Go to Home page

4.2 Insert a valid string

4.3 Select valid dates

4.4 Click the Search Button

4.5 In the Filter section, select two or more options in Property rating

Search page should be refreshed

Applied filters are displayed correctly
