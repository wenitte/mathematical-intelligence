# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Puzzles_and_Curious_Problems/90_-_Summing_the_Digits/Solution



Puzzles and Curious Problems by Henry Ernest Dudeney: $90$
Summing the Digits
What is the sum of all the numbers that can be formed with all $9$ digits ($0$ excluded),
using each digit once and once only, in every number?


Solution
$201 \, 599 \, 999 \, 798 \, 400$


Proof
There are $9!$ permutations of the $9$ digits, that is: $362 \, 880$.
Of these permutations, each digit appears in each of the $9$ positions a total of $8!$ times each.
We note that $\ds \sum_{n \mathop = 1}^9 n = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = 45$.
Let $S$ be the required sum.
We have:














\(\ds S\)

\(=\)







\(\ds 8! \times \sum_{n \mathop = 1}^9 n\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds 8! \times \sum_{n \mathop = 1}^9 10 n\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \cdots\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds 8! \times \sum_{n \mathop = 1}^9 100 \, 000 \, 000 n\)




















\(\ds \)

\(=\)







\(\ds 8! \times \paren {45 + 450 + 4500 + 45 \, 000 + 450 \, 000 + 4 \, 500 \, 000 + 45 \, 000 \, 000 + 450 \, 000 \, 000 + 4 \, 500 \, 000 \, 000}\)




















\(\ds \)

\(=\)







\(\ds 40 \, 320 \times 4 \, 999 \, 999 \, 995\)




















\(\ds \)

\(=\)







\(\ds 201 \, 599 \, 999 \, 798 \, 400\)









$\blacksquare$



This theorem requires a proof.In particular: Given that we have this problem and the previous one, it's worth setting up a page proving the sum of all numbers made from the digits $1, 2, \ldots, n$ once and once only for $1 \le n \le 9$, that is, for the general $n$, and using that. Include Dudeney's technique (not given here), tightened up and rationalised.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by crafting such a proof.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{ProofWanted}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Sources
1932: Henry Ernest Dudeney: Puzzles and Curious Problems ... (previous) ... (next): Solutions: $90$. -- Summing the Digits
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $127$. Summing the Digits




