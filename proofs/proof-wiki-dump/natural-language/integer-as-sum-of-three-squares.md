# 

Source: https://proofwiki.org/wiki/Integer_as_Sum_of_Three_Squares



Theorem
Let $r$ be a positive integer.
Then $r$ can be expressed as the sum of three squares if and only if it is not of the form:

$4^n \paren {8 m + 7}$
for some $m, n \in \Z_{\ge 0}$.


Sequence
The sequence of positive integers that cannot be expressed as the sum of at most $3$ squares begins:

$7, 15, 23, 28, 31, 39, 47, 55, 60, \ldots$


Proof
Sufficient Condition
Suppose $r$ is not of the form $4^n \paren {8 m + 7}$.
Then we need to show that it can always be expressed as the sum of three squares.


This theorem requires a proof.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by crafting such a proof.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{ProofWanted}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Necessary Condition
From Square Modulo 8, the squares modulo $8$ are $0, 1$ and $4$.
So the sum of three squares can be congruent modulo $8$ to any of the values $0, 1, 2, 3, 4, 5$ or $6$, but not $7$.
So no number of the form $8 m + 7$ can be the sum of three squares.

Now, suppose that $\exists n \ge 1, m \ge 0$ such that:

$4^n \paren {8 m + 7} = x^2 + y^2 + z^2$
As the left hand side is congruent modulo 4 to $0$, and as squares modulo 4 are either $0$ or $1$, it must be that $x, y$ and $z$ are all even.
Putting $x = 2 x_1, y = 2 y_1, z = 2 z_1$, we get:

$4^{n - 1} \paren {8 m + 7} = x_1^2 + y_1^2 + z_1^2$
If $n - 1 > 1$ then $x_1, y_1$ and $z_1$ are all still even, and the argument can be repeated:

$4^{n - 2} \paren {8 m + 7} = x_2^2 + y_2^2 + z_2^2$
Thus we descend through all powers of $4$ till $8 m + 7$ itself is expressed as the sum of three squares.
But this is impossible, as we saw above.
So the assumption that $4^n \paren {8 m + 7}$ can be expressed as the sum of three squares is false.
$\blacksquare$


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {3-5}$ The Use of Computers in Number Theory: Exercise $4$
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $3$
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $4$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $3$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $4$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Lagrange's theorem: 1. (J.L. Lagrange, 1772)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Lagrange's theorem: 1. (J.L. Lagrange, 1772)




