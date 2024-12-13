# 

Source: https://proofwiki.org/wiki/Law_of_Quadratic_Reciprocity



Theorem
Let $p$ and $q$ be distinct odd primes.
Then:

$\paren {\dfrac p q} \paren {\dfrac q p} = \paren {-1}^{\dfrac {\paren {p - 1} \paren {q - 1} } 4}$
where $\paren {\dfrac p q}$ and $\paren {\dfrac q p}$ are defined as the Legendre symbol.
An alternative formulation is:
$\paren {\dfrac p q} = \begin{cases}
\quad \paren {\dfrac q p} & : p \equiv 1 \lor q \equiv 1 \pmod 4 \\
-\paren {\dfrac q p} & : p \equiv q \equiv 3 \pmod 4
\end{cases}$

The fact that these formulations are equivalent is immediate.

This fact is known as the Law of Quadratic Reciprocity, or LQR for short.


First Supplement to Law of Quadratic Reciprocity
$\quad \paren {\dfrac {-1} p} = \paren {-1}^{\paren {p - 1} / 2} = \begin {cases}
+1 & : p \equiv 1 \pmod 4 \\
-1 & : p \equiv 3 \pmod 4
\end {cases}$


Second Supplement to Law of Quadratic Reciprocity
$\quad \paren {\dfrac 2 p} = \paren {-1}^{\paren {p^2 - 1} / 8} = \begin {cases}
+1 & : p \equiv \pm 1 \pmod 8 \\
-1 & : p \equiv \pm 3 \pmod 8
\end {cases}$


Proof
Let $p$ and $q$ be distinct odd primes.
Consider the rectangle in the $x y$ plane with vertices at $\tuple {0, 0}, \tuple {\dfrac p 2, 0}, \tuple {\dfrac p 2, \dfrac q 2}, \tuple {0, \dfrac q 2}$.
The number of lattice points inside this rectangle is $\dfrac {p - 1} 2 \times \dfrac {q - 1} 2$.




Consider the diagonal from $\tuple {0, 0}$ to $\tuple {\dfrac p 2, \dfrac q 2}$.
This has the equation:

$y = \dfrac q p x$

Aiming for a contradiction, suppose there were a lattice point $\tuple {a, b}$ on the diagonal.
Then:

$b = \dfrac q p a$
But as $p$ and $q$ are distinct primes, this would mean:

$p$ divides $a$
and:

$q$ divides $b$
This means that $\tuple {a, b}$ has to be outside the rectangle.
So there are no lattice points on the diagonal inside the rectangle.

Let $A$ and $B$ be the triangular regions inside the rectangle lying respectively above and below the diagonal.
Let $k \in \Z: 0 < k < \dfrac p 2$.
The number of lattice points in $B$ which lie directly above the point $\tuple {k, 0}$ is:

$\floor {\dfrac q p k}$
where $\floor {\dfrac q p k}$ is the floor of $\dfrac q p k$.
So the total number of lattice points in $B$ is given by:

$\ds N_B = \sum_{k \mathop = 1}^{\frac{p - 1} 2} \floor {\dfrac q p k}$
Let $\map \alpha {q, p}$ be defined as:

$\ds \map \alpha {q, p} = \sum_{k \mathop = 1}^{\frac {p - 1} 2} \floor {\dfrac q p k}$
In the same way, by counting the lattice points to the right of $\tuple {0, k}$, the total number of lattice points in $A$ is given by:

$N_A = \map \alpha {p, q}$

Now the total number of lattice points in the rectangle is $N_A + N_B$.
But this is also equal to:

$\dfrac {p - 1} 2 \times \dfrac {q - 1} 2 = \dfrac {\paren {p - 1} \paren {q - 1} } 4$
So we have that:

$\map \alpha {p, q} + \map \alpha {q, p} = \dfrac {\paren {p - 1} \paren {q - 1} } 4$
The fact that these counts are equal relies upon the fact that there are no lattice points on the diagonal, as demonstrated above.

Now we invoke Eisenstein's Lemma:

$\paren {\dfrac a p} = \paren {-1}^{\map \alpha {a, p} }$
So this gives us:














\(\ds \paren {\frac p q} \paren {\frac q p}\)

\(=\)







\(\ds \paren {-1}^{\map \alpha {p, q} } \times \paren {-1}^{\map \alpha {q, p} }\)




















\(\ds \)

\(=\)







\(\ds \paren {-1}^{\map \alpha {p, q} + \map \alpha {q, p} }\)




















\(\ds \)

\(=\)







\(\ds \paren {-1}^{\frac {\paren {p - 1} \paren {q - 1} } 4}\)









which is LQR.
$\blacksquare$


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Also known as
The Law of Quadratic Reciprocity is also known as the Law of Gaussian Reciprocity, after Carl Friedrich Gauss.


Historical Note
The Law of Quadratic Reciprocity was investigated by Leonhard Paul Euler who stated it imperfectly and failed to find a proof.
Adrien-Marie Legendre first stated it correctly, but his attempted $\text {1785}$ proof of it was incorrect.
Carl Friedrich Gauss first became aware of this result, and found a correct proof. He wrote this up in $\text {1798}$ and published it in his Disquisitiones Arithmeticae in $\text {1801}$.
The proof as given here was found by Ferdinand Eisenstein and published in $\text {1844}$.


Sources
1844: F.G. Eisenstein: Geometrischer Beweis des Fundamentaltheorems für die quadratischen Reste (J. reine angew. Math. Vol. 28: pp. 246 – 248)
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): quadratic reciprocity or Gaussian reciprocity
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Exercise $47 \ \text{d)}$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): quadratic reciprocity, law of
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): quadratic reciprocity, law of
2008: Ian Stewart: Taming the Infinite ... (previous) ... (next): Chapter $7$: Patterns in Numbers: Gauss




