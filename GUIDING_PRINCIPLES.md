# The Three Rules of TDD
- Write production code only to pass a failing unit test
- Write no more of a unit test than sufficient to fail (compilation failures are failures)
- Write no more production code than necessary to pass the one failing unit test

# Proverbs:
- If it ain’t broke: don’t fix it
- Make it work, *then* make it fast

# Red > Green > Refactor
- First think about WHAT you're doing
- Then think about HOW
- Finally, think about IMPROVEMENT

# How to read a test
- Look for the *ARRANGE* step - what is it doing?
- See what the intention is in the *ACT* step - 
  - What methods get called?
  - What argument are passed?
- What is measured by the *ASSERT* step? 
  - How is it measured - what is the expectation?
  - What methods get called?
  - What arguments are passed?