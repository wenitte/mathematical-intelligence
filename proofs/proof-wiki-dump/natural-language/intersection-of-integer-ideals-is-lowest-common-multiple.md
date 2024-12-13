# 

Source: https://proofwiki.org/wiki/Intersection_of_Integer_Ideals_is_Lowest_Common_Multiple


April 8, 2023:  It has been suggested that this page or section be merged into Intersection of Sets of Integer Multiples.In particular: It seems to be just a ring-theoretic statement of the theorem.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.
Theorem
Let $\ideal m$ and $\ideal n$ be ideals of the integers $\Z$.
Let $\ideal k$ be the intersection of $\ideal m$ and $\ideal n$.

Then $k = \lcm \set {m, n}$.


Proof
By Intersection of Ring Ideals is Ideal we have that $\ideal k = \ideal m \cap \ideal n$ is an ideal of $\Z$.
By Ring of Integers is Principal Ideal Domain we have that $\ideal m$, $\ideal n$ and $\ideal k$ are all necessarily principal ideals.
By Subrings of Integers are Sets of Integer Multiples we have that:

$\ideal m = m \Z, \ideal n = n \Z$
Thus:

$\ideal k = \set {x \in \Z: n \divides x \land m \divides x}$
The result follows by LCM iff Divides All Common Multiples.
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $5$: Rings: $\S 21$. Ideals: Example $37$




