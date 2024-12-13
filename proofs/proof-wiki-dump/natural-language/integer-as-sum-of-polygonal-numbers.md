# 

Source: https://proofwiki.org/wiki/Integer_as_Sum_of_Polygonal_Numbers



Theorem
Let $n \in \Z_{>0}$ be a (strictly) positive integer.
Then $n$ is:

$(1): \quad$ Either triangular or the sum of $2$ or $3$ triangular numbers
$(2): \quad$ Either square or the sum of $2$, $3$ or $4$ square numbers
$(3): \quad$ Either pentagonal or the sum of $2$, $3$, $4$ or $5$ pentagonal numbers
and so on.

That is:

for all $k \ge 3$, $n$ is the sum of no more than $k$ polygonal numbers of order $k$.


Proof
First some lemmata:

Lemma 1
Let $n, m \in \N_{>0}$ such that $m \ge 3$.
Let $n < 116 m$.
Then $n$ can be expressed as a sum of at most $m + 2$ polygonal numbers of order $m + 2$.
$\Box$


Lemma 2
Let $n, m \in \R_{>0}$ such that $\dfrac n m \ge 1$.
Define $I$ to be the open real interval:

$I = \openint {\dfrac 2 3 + \sqrt {8 \paren {\dfrac n m} - 8} } {\dfrac 1 2 + \sqrt {6 \paren {\dfrac n m} - 3} }$
Then:

For $\dfrac n m \ge 116$, the length of $I$ is greater than $4$.
$\Box$


Lemma 3
Let $n, m, r \in \R_{>0}$.
Suppose $\dfrac n m > 1$.
Let $b \in \openint {\dfrac 2 3 + \sqrt {8 \paren {\dfrac n m} - 8} } {\dfrac 1 2 + \sqrt {6 \paren {\dfrac n m} - 3} }$.

Define:

$a = 2 \paren {\dfrac {n - b - r} m} + b = \paren {1 - \dfrac 2 m} b + 2 \paren {\dfrac {n - r} m}$

Then $a, b$ satisfy:

$b^2 < 4 a$
$3 a < b^2 + 2 b + 4$
$\Box$

First note that Cauchy's Lemma (Number Theory) gives us:
Let $a$ and $b$ be odd positive integers. 
Suppose $a$ and $b$ satisfy: 




\(\text {(1)}: \quad\)









\(\ds b^2\)

\(<\)







\(\ds 4 a\)










\(\text {(2)}: \quad\)









\(\ds 3 a\)

\(<\)







\(\ds b^2 + 2 b + 4\)









Then there exist non-negative integers $s, t, u, v$ such that:














\(\ds a\)

\(=\)







\(\ds s^2 + t^2 + u^2 + v^2\)




















\(\ds b\)

\(=\)







\(\ds s + t + u + v\)









$\Box$

Now we consider the numbered statements as asserted.
For $(1)$, we have Integer is Sum of Three Triangular Numbers.
For $(2)$, we have Lagrange's Four Square Theorem.

For each $m \ge 3$, we prove that $n$ is the sum of at most $m + 2$ polygonal numbers of order $m + 2$.
We choose to consider polygonal numbers of order $m + 2$, rather than $m$-gonal numbers, because the former have a neater closed form:

$\map P {m + 2, k} = \dfrac m 2 \paren {k^2 - k} + k$
For $n < 116 m$ the result is shown in Lemma 1.
It remains to investigate the integers $n \ge 116 m$.

Define:

$I = \openint {\dfrac 2 3 + \sqrt {8 \paren {\dfrac n m} - 8} } {\dfrac 1 2 + \sqrt {6 \paren {\dfrac n m} - 3} }$
By Lemma 2:

For $\dfrac n m \ge 116$, the length of $I$ is greater than $4$.

Thus $I$ must contain at least $2$ consecutive odd integers.

Let $b_1, b_2$ be those consecutive odd integers.
Because $b_1 + m - 1 = b_2 + m - 3$:

the set $\set {b + r: b \in \set {b_1, b_2}, r \in \set {0, 1, \dots, m - 2} }$ contains a complete residue system modulo $m$.
Hence one can choose some $b, r$ and write $n \equiv b + r \pmod m$.

Define:

$a = 2 \paren {\dfrac {n - b - r} m} + b = \paren {1 - \dfrac 2 m} b + 2 \paren {\dfrac {n - r} m}$
Since $m \divides \paren {n - b - r}$ and $b$ is odd:

$a$ is an odd integer.

Since $b \in I$, from Lemma 3 we have:

$b^2 < 4 a$
$3 a < b^2 + 2 b + 4$

Then by Cauchy's Lemma (Number Theory), we can write:

$a = s^2 + t^2 + u^2 + v^2$
$b = s + t + u + v$
for nonnegative integers $s, t, u, v$.

Thus:














\(\ds n\)

\(=\)







\(\ds \frac m 2 \paren {a - b} + b + r\)





From $a = 2 \paren {\dfrac {n - b - r} m} + b$














\(\ds \)

\(=\)







\(\ds \frac m 2 \paren {s^2 + t^2 + u^2 + v^2 - s - t - u - v} + s + t + u + v + r\)




















\(\ds \)

\(=\)







\(\ds \paren {\frac m 2 \paren {s^2 - s} + s} + \paren {\frac m 2 \paren {t^2 - t} + t} + \paren {\frac m 2 \paren {u^2 - u} + u} + \paren {\frac m 2 \paren {v^2 - v} + v} + r \times 1\)




















\(\ds \)

\(=\)







\(\ds \map P {m + 2, s} + \map P {m + 2, t} + \map P {m + 2, u} + \map P {m + 2, v} + r \map P {m + 2, 1}\)









Since $r \le m - 2$, the above expression comprises at most $m + 2$ polygonal numbers of order $m + 2$.
$\blacksquare$


Historical Note
Many of Fermat's theorems were stated, mostly without proof, in the margin of his copy of Bachet's translation of Diophantus's Arithmetica.
In $1670$, his son Samuel published an edition of this, complete with Fermat's marginal notes.


Fermat's Note
As Fermat himself put it:

Every positive integer is triangular or the sum of $2$ or $3$ triangular numbers; a square or the sum of $2$, $3$ or $4$ squares; a pentagonal number or the sum of $2$, $3$, $4$ or $5$ pentagonal numbers; and so on to infinity, whether it is a question of hexagonal, heptagonal or any polygonal numbers.
I cannot give the proof here, for it depends on many abstruse mysteries of numbers; but I intend to devote an entire book to this subject, and to present in this part of number theory astonishing advances beyond previously known boundaries.

Euler struggled on and off with the proof for squares without success for nearly $40$ years. Lagrange finally managed this in $1772$.
Gauss proved the theorem for triangular numbers in $1796$.
Finally, Cauchy proved the theorem in its completeness in $1815$.


Sources
Jan 1987: Melvyn B. Nathanson: A Short Proof of Cauchy's Polygonal Number Theorem (Proceedings of the American Mathematical Society Vol. 99, no. 1: pp. 22 – 24)
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {A}.13$: Fermat ($\text {1601}$ – $\text {1665}$)




