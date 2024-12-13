# 

Source: https://proofwiki.org/wiki/Number_of_form_28000...0007_is_Divisible_by_7

Theorem
Let $x$ be a natural number in the form:

$\sqbrk {28 \underbrace {000 \cdots 0}_n 7}_{10}$
Then $x$ is divisible by $7$.


Proof 1
We have:














\(\ds \sqbrk {28 \underbrace {000 \cdots 0}_n 7}_{10}\)

\(=\)







\(\ds 2 \times 10^{n + 2} + 8 \times 10^{n + 1} + 0 \times 10^n + \cdots + 0 \times 10^1 + 7\)




















\(\ds \)

\(=\)







\(\ds 28 \times 10^{n + 1} + 7\)










Then:














\(\ds 28 \times 10^{n + 1} + 7\)

\(\equiv\)







\(\ds 0 \times 3^{n + 1} + 0\)

\(\ds \pmod 7\)



Fermat's Little Theorem and Congruence of Powers














\(\ds \)

\(\equiv\)







\(\ds 0 + 0\)

\(\ds \pmod 7\)



Congruence of Product














\(\ds \)

\(\equiv\)







\(\ds 0\)

\(\ds \pmod 7\)







$\blacksquare$


Proof 2
We have:














\(\ds \sqbrk {28 \underbrace {000 \cdots 0}_n 7}_{10}\)

\(=\)







\(\ds 7 \times \sqbrk {4 \underbrace {000 \cdots 0}_n 1}_{10}\)









and the result follows by definition of divisibility.
$\blacksquare$





