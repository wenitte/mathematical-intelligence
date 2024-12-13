# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Modern_Puzzles/198_-_A_Card_Trick/Solution

Modern Puzzles by Henry Ernest Dudeney: $198$
A Card Trick
Take an ordinary pack of playing-cards and regard all the court cards as tens.
Now, look at the top card -- say it is a seven -- place it on the table face downwards and play more cards on top of it, counting up to twelve.
Thus, the bottom card being seven, the next will be eight, the next nine, and so on, making six cards in that pile.
Then look again at the top card of pack -- say it is a queen -- then count $10$, $11$, $12$ (three cards in all) and complete the second pile.
Continue this, always counting up to twelve, and if at last you have not put sufficient cards to complete a pile, put these apart.
Now, if I am told how many piles have been made and how many unused cards remain over,
I can at once tell you the sum of all the bottom cards in the piles.
I simply multiply by $13$ the number of piles less $4$, and add the number of cards left over.
Thus, if there were $6$ piles and $4$ cards over, then $13$ times $2$ (i.e. $6$ less $4$) added to $5$ equals $31$, the sum of the bottom cards.
Why is this?
This is the question.


Solution
Let there be $n$ piles.
Let $p_k$ denote the number of cards in pile $k$.
Let $b_k$ denote the value of the bottom card.
Let $m$ be the number of cards left over.
We have that:

$p_k = 13 - b_k$
for all $1 \le k \le n$.














\(\ds p_k\)

\(=\)







\(\ds 13 - b_k\)





by definition














\(\ds 52\)

\(=\)







\(\ds \sum_{k \mathop = 1}^n p_k + m\)





that is, the total number of cards in the pack














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \paren {13 - b_k} + m\)




















\(\ds \)

\(=\)







\(\ds 13 n - \sum_{k \mathop = 1}^n b_k + m\)














\(\ds \leadsto \ \ \)





\(\ds 13 n + m - 52\)

\(=\)







\(\ds \sum_{k \mathop = 1}^n b_k\)














\(\ds \leadsto \ \ \)





\(\ds 13 \paren {n - 4} + m\)

\(=\)







\(\ds \sum_{k \mathop = 1}^n b_k\)









That is, the sum of all the bottom cards in the piles equals the number of piles minus $4$, all times $13$, plus the ones left over.
$\blacksquare$


Sources
1926: Henry Ernest Dudeney: Modern Puzzles ... (previous) ... (next): Solutions: $198$. -- A Card Trick
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $183$. A Card Trick




