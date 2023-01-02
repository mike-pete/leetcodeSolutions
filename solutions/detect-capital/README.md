# Detect Capital

We define the usage of capitals in a word to be right when one of the following cases holds:

- All letters in this word are capitals, like <code>"USA"</code>.

- All letters in this word are not capitals, like <code>"leetcode"</code>.

- Only the first letter in this word is capital, like <code>"Google"</code>.

Given a string <code>word</code>, return <code>true</code> if the usage of capitals in it is right.


**Example 1:**
>
> **Input:** word = "USA"
>
> **Output:** true

**Example 2:**
>
> **Input:** word = "FlaG"
>
> **Output:** false


**Constraints:**

- <code>1 &lt;= word.length &lt;= 100</code>

- <code>word</code> consists of lowercase and uppercase English letters.
