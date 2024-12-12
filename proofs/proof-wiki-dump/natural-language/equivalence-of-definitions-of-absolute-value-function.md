# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Absolute_Value_Function



Theorem
The following definitions of the concept of Absolute Value are equivalent:

Definition 1
Let $x \in \R$ be a real number.

The absolute value of $x$ is denoted $\size x$, and is defined using the usual ordering on the real numbers as follows:

$\size x = \begin{cases} x & : x > 0 \\ 0 & : x = 0 \\ -x & : x < 0 \end{cases}$
Definition 2
Let $x \in \R$ be a real number.
The absolute value of $x$ is denoted $\size x$, and is defined as:

$\size x = +\sqrt {x^2}$
where $+\sqrt {x^2}$ is the positive square root of $x^2$.


Proof
Definition 1 implies Definition 2
Let $f: \R \to \R$ be the function defined as:

$\forall x \in \R: \map f x = \begin{cases}
x & : x > 0 \\
0 & : x = 0 \\
-x & : x < 0
\end{cases}$

Let $x > 0$.
We have that:














\(\ds \paren {-x}^2\)

\(=\)







\(\ds \paren {-1}^2 x^2\)




















\(\ds \)

\(=\)







\(\ds x^2\)














\(\ds \leadsto \ \ \)





\(\ds +\sqrt {\paren {-x}^2}\)

\(=\)







\(\ds x\)




















\(\ds \)

\(=\)







\(\ds +\sqrt {x^2}\)









Thus $\map f x = +\sqrt {x^2}$
$\Box$


Definition 2 implies Definition 1
Let $f: \R \to \R$ be the function defined as:

$\forall x \in \R: \map f x = +\sqrt {x^2}$

Let $x > 0$.
Then by definition of square and square root:

$+\sqrt {x^2} = x$

Let $x = 0$.
Then $+\sqrt {0^2} = 0$.

Let $x < 0$.
Thus let $x = -y$.
Then:

$+\sqrt {\paren {-y}^2} = y = -x$
$\blacksquare$


Sources
1964: William K. Smith: Limits and Continuity ... (previous) ... (next): $\S 2.2$: Functions: Exercise $\text{B} \ 1 \ \text{(d)}$
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 1$: Real Numbers: $\S 1.14$: Modulus




