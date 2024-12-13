# 

Source: https://proofwiki.org/wiki/Principle_of_Mathematical_Induction/Warning/Example_3

Example of Incorrect Use of Principle of Mathematical Induction
We are to prove that:

$1 + 3 + 5 + \dotsb + \paren {2 n - 1} = n^2 + 3$

We establish as an induction hypothesis:

$1 + 3 + 5 + \dotsb + \paren {2 k - 1} = k^2 + 3$

Then:














\(\ds 1 + 3 + 5 + \dotsb + \paren {2 k - 1} + \paren {2 k + 1}\)

\(=\)







\(\ds k^2 + 3 + \paren {2 k + 1}\)





from the induction hypothesis














\(\ds \)

\(=\)







\(\ds k^2 + 2 k + 1 + 3\)




















\(\ds \)

\(=\)







\(\ds \paren {k + 1}^2 + 3\)





Square of Sum




But clearly this is wrong, because for $n = 2$, say:














\(\ds \paren {2 \times 1 - 1} + \paren {2 \times 2 - 1}\)

\(=\)







\(\ds 1 + 3\)




















\(\ds \)

\(=\)







\(\ds 4\)









on the left hand side, but:

$2^2 + 3 = 7$
on the right hand side.


Refutation
The basis for the induction has not been established.
It is in fact not possible to find a value of $n$ for which $1 + 3 + 5 + \dotsb + \paren {2 n - 1} = n^2 + 3$ actually holds.
$\blacksquare$


Sources
1980: David M. Burton: Elementary Number Theory (revised ed.) ... (previous) ... (next): Chapter $1$: Some Preliminary Considerations: $1.1$ Mathematical Induction




