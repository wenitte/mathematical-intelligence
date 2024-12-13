# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Modern_Puzzles/168_-_The_Magisterial_Bench/Solution/Proof_1



Modern Puzzles by Henry Ernest Dudeney: $168$
The Magisterial Bench
A bench of magistrates consists of two Englishmen, two Scotsmen, two Welshmen, one Frenchman, one Italian, one Spaniard, and one American.
The Englishmen will not sit beside one another, the Scotsmen will not sit beside one another, and the Welshmen also object to sitting together.
Now, in how many different ways may the ten men sit in a straight line so that no two men of the same nationality shall ever be next to one another?


Solution
$1 \, 895 \, 040$.


Proof
Without imposing any conditions, we can arrange $10$ men in one line in a total of $10! = 3 \, 628 \, 800$ different ways.
It remains to count how many of these are barred.
Let us regard two of a nationality together as one item.


$(1): \quad$ We consider:
$\paren {E \ E} \ \paren {S \ S} \ \paren {W \ W} \ F \ I \ S \ A$
as a set of $7$ objects that can be permuted in $7!$ ways, multiplied by $2^3$ to account for the fact that either of the two within the pairs can be arranged in $2$ different ways.
Hence we remove all such permutations, which is $7! \times 2^3 = 40 \, 320$.

$(2): \quad$ Then we eliminate all permutations of the form:
$\paren {E \ E} \ \paren {S \ S} \ W \ W \ F \ I \ S \ A$
where the Welshmen are not together.
This gives $8! \times 2^2$, but we must deduct the above arrangements or we will count them twice.
This gives $8! \times 2^2 - 7! \times 2^3 = 120 \, 960$.

$(3): \quad$ The same applies to permutations of the form:
$E \ E \ \paren {S \ S} \ \paren {W \ W} \ F \ I \ S \ A$
This gives another deduction of $120 \, 960$.


$(4): \quad$ The same applies to permutations of the form:
$\paren {E \ E} \ S \ S \ \paren {W \ W} \ F \ I \ S \ A$.
Hence another deduction of $120 \, 960$.


$(5): \quad$ Similarly we eliminate all permutations of the form $\paren {E \ E} \ S \ S \ W \ W \ F \ I \ S \ A$.
By similar reasoning, there are $9! \times 2$ cases, from which we need to deduct the results of $(1)$, $(2)$ and $(3)$ (but not $(4)$).
This gives $9! \times 2 - 40 \, 320 - 2 \times 120 \, 960 = 443 \, 520$.


$(6): \quad$ Similarly we eliminate all permutations of the form $E \ E \ \paren {S \ S} \ W \ W \ F \ I \ S \ A$.
This gives another $443 \, 520$.


$(7): \quad$ Similarly we eliminate all permutations of the form $E \ E \ S \ S \ \paren {W \ W} \ F \ I \ S \ A$.
This gives another $443 \, 520$.

Add all these up together:

$40 \, 320 + 3 \times 120 \, 960 + 3 \times 443 \, 520 = 1 \, 733 \, 760$
Hence we have:

$3 \, 628 \, 800 - 1 \, 733 \, 760 = 1 \, 895 \, 040$
$\blacksquare$


Sources
1926: Henry Ernest Dudeney: Modern Puzzles ... (previous) ... (next): Solutions: $168$. -- The Magisterial Bench
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $447$. The Magisterial Bench




