# 

Source: https://proofwiki.org/wiki/Integer_as_Sums_and_Differences_of_Consecutive_Squares



Theorem
Every integer $k$ can be represented in infinitely many ways in the form:

$k = \pm 1^2 \pm 2^2 \pm 3^3 \pm \dots \pm m^2$
for some (strictly) positive integer $m$ and some choice of signs $+$ or $-$.


Proof
First we notice that:














\(\ds \)

\(\)







\(\ds \paren {m + 1}^2 - \paren {m + 2}^2 - \paren {m + 3}^2 + \paren {m + 4}^2\)




















\(\ds \)

\(=\)







\(\ds \paren {-1} \paren {m + 1 + m + 2} + \paren {m + 3 + m + 4}\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds 4\)










Now we prove a weaker form of the theorem by induction:

Every positive integer $k$ can be represented in at least one way in the form:
$k = \pm 1^2 \pm 2^2 \pm 3^3 \pm \dots \pm m^2$
for some (strictly) positive integer $m$ and some choice of signs $+$ or $-$.
Basis for the Induction
From the identity above we have:














\(\ds 0\)

\(=\)







\(\ds 4 - 4\)




















\(\ds \)

\(=\)







\(\ds + 1^2 - 2^2 - 3^2 + 4^2 - 5^2 + 6^2 + 7^2 - 8^2\)









Also we have, more or less trivially:

$1 = + 1^2$
$2 = - 1^2 - 2^2 - 3^2 + 4^2$
$3 = - 1^2 + 2^2$
This is the basis for the induction.


Induction Hypothesis
This is the induction hypothesis:

For some positive integer $k$, we have:
$k = \pm 1^2 \pm 2^2 \pm 3^3 \pm \dots \pm m^2$
for some (strictly) positive integer $m$ and some choice of signs $+$ or $-$.
Now we need to show true for $n = k + 4$:

$k + 4 = \pm 1^2 \pm 2^2 \pm 3^3 \pm \dots \pm {m_2}^2$
for some (strictly) positive integer $m_2$ and some choice of signs $+$ or $-$.


Induction Step
This is the induction step:














\(\ds \)

\(\)







\(\ds k + 4\)




















\(\ds \)

\(=\)







\(\ds \pm 1^2 \pm 2^2 \pm 3^3 \pm \dots \pm m^2 + 4\)





from induction hypothesis














\(\ds \)

\(=\)







\(\ds \pm 1^2 \pm 2^2 \pm 3^3 \pm \dots \pm m^2 + \paren {m + 1}^2 - \paren {m + 2}^2 - \paren {m + 3}^2 + \paren {m + 4}^2\)





from the above identity



which is of the required form.
Hence every positive integer $k$ can be represented in at least one way in the required form.
$\Box$

From the identity above we can also conclude:














\(\ds 0\)

\(=\)







\(\ds 4 - 4\)




















\(\ds \)

\(=\)







\(\ds \paren {m + 1}^2 - \paren {m + 2}^2 - \paren {m + 3}^2 + \paren {m + 4}^2 - \paren {m + 5}^2 + \paren {m + 6}^2 + \paren {m + 7}^2 - \paren {m + 8}^2\)









therefore if $k$ can be written as:

$k = \pm 1^2 \pm 2^2 \pm 3^3 \pm \dots \pm m^2$
it can also be written as:

$k = \pm 1^2 \pm 2^2 \pm 3^3 \pm \dots \pm m^2 + \paren {m + 1}^2 - \paren {m + 2}^2 - \paren {m + 3}^2 + \paren {m + 4}^2 - \paren {m + 5}^2 + \paren {m + 6}^2 + \paren {m + 7}^2 - \paren {m + 8}^2$
and:

$k = \pm 1^2 \pm 2^2 \pm 3^3 \pm \dots \pm \paren {m + 8}^2 + \paren {m + 9}^2 - \paren {m + 10}^2 - \paren {m + 11}^2 + \paren {m + 12}^2 - \paren {m + 13}^2 + \paren {m + 14}^2 + \paren {m + 15}^2 - \paren {m + 16}^2$
and so on.
Hence every positive integer $k$ can be represented in infinitely many ways in the required form.
$\Box$

Finally we cover the case where $k$ is a negative integer.
Since $-k$ is a positive integer, it can be represented in infinitely many ways in the required form.
For every representation of $-k$ in this way, by flipping every $+$ and $-$ sign, we end up with a representation of $- \paren {- k} = k$.
Hence every integer $k$, positive or negative, can be represented in infinitely many ways in the required form.
$\blacksquare$


Example
Since the proof above is constructive, we can follow the proof and derive:














\(\ds 15\)

\(=\)







\(\ds 3 + 4 + 4 + 4\)




















\(\ds \)

\(=\)







\(\ds \paren {- 1^2 + 2^2} + \paren {3^2 - 4^2 - 5^2 + 6^2} + \paren {7^2 - 8^2 - 9^2 + 10^2} + \paren {11^2 - 12^2 - 13^2 + 14^2}\)









and its associated family of solutions:














\(\ds 15\)

\(=\)







\(\ds - 1^2 + 2^2 + 3^2 - 4^2 - 5^2 + 6^2 + 7^2 - 8^2 - 9^2 + 10^2 + 11^2 - 12^2 - 13^2 + 14^2 + 15^2 - 16^2 - 17^2 + 18^2 - 19^2 + 20^2 + 21^2 - 22^2\)









and so on.
However this may not give the least number of squares that this works for.
In fact we have:














\(\ds 15\)

\(=\)







\(\ds 1^2 - 2^2 + 3^2 - 4^2 + 5^2\)









from Triangular Number as Alternating Sum and Difference of Squares.


Also see
Definition:Erdős-Surányi Sequence


Historical Note
Wacław Sierpiński attributes this result to Paul Erdős and János Surányi.


Sources
1970: Wacław Sierpiński: 250 Problems in Elementary Number Theory: No. $250$




