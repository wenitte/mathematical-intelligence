# 

Source: https://proofwiki.org/wiki/Number_divides_Number_iff_Cube_divides_Cube



Theorem
Let $a, b \in \Z$.
Then:

$a^3 \divides b^3 \iff a \divides b$
where $\divides$ denotes integer divisibility.

In the words of Euclid:

If a cube number measure a cube number, the side will also measure the side; and, if the side measure the side, the cube will also measure the cube.
(The Elements: Book $\text{VIII}$: Proposition $15$)


Proof
Let $a^3$ and $b^3$ be cube numbers.
From the corollary to Form of Geometric Sequence of Integers:

$\tuple {a^3, a^2 b, a b^2, b^3}$
is a geometric sequence.
Let $a, b \in \Z$ such that $a^2 \divides b^2$.
Then from First Element of Geometric Sequence that divides Last also divides Second:

$a^3 \divides a^2 b$
Thus:














\(\ds a^3\)

\(\divides\)







\(\ds a^2 b\)














\(\ds \leadsto \ \ \)

\(\ds \exists k \in \Z: \, \)



\(\ds k a^3\)

\(=\)







\(\ds a^2 b\)





Definition of Divisor of Integer








\(\ds \leadsto \ \ \)





\(\ds k a\)

\(=\)







\(\ds b\)














\(\ds \leadsto \ \ \)





\(\ds a\)

\(\divides\)







\(\ds b\)





Definition of Divisor of Integer



$\Box$

Let $a \divides b$.
Then:














\(\ds a\)

\(\divides\)







\(\ds b\)














\(\ds \leadsto \ \ \)

\(\ds \exists k \in \Z: \, \)



\(\ds k a\)

\(=\)







\(\ds b\)





Definition of Divisor of Integer








\(\ds \leadsto \ \ \)





\(\ds k a^3\)

\(=\)







\(\ds a^2 b\)














\(\ds \leadsto \ \ \)





\(\ds a^3\)

\(\divides\)







\(\ds a^2 b\)





Definition of Divisor of Integer








\(\ds \leadsto \ \ \)





\(\ds a^3\)

\(\divides\)







\(\ds b^3\)





Divisibility of Elements in Geometric Sequence of Integers



$\blacksquare$


Historical Note
This proof is Proposition $15$ of Book $\text{VIII}$ of Euclid's The Elements.


Sources
1926: Sir Thomas L. Heath: Euclid: The Thirteen Books of The Elements: Volume 2 (2nd ed.) ... (previous) ... (next): Book $\text{VIII}$. Propositions




