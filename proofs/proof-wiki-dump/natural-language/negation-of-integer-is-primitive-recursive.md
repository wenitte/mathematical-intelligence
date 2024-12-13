# 

Source: https://proofwiki.org/wiki/Negation_of_Integer_is_Primitive_Recursive

Theorem
Let $f^- : \N \to \N$ be defined as:

$\map {f^-} {x_\Z} = \paren {-x}_\Z$
where:

$k_\Z$ denotes the code number for the integer $k$
Then $f^-$ is a primitive recursive function.


Proof
Define $f^-$ as:
$\quad\map {f^-} {x_\Z} = \begin{cases}
\map {c^-} {\size x} & : x > 0 \\
\map {c^+} {\size x} & : \text{otherwise}
\end{cases}$
where:

$\map {c^-} x = \paren {-x}_\Z$
$\map {c^+} x = x_\Z$
The function is primitive recursive by:

Definition by Cases is Primitive Recursive/Corollary
Set of Strictly Positive Integers is Primitive Recursive
Code Number for Non-Negative Integer is Primitive Recursive
Code Number for Non-Positive Integer is Primitive Recursive

For $x > 0$, we have:

$x = \size x$
Thus:

$\map {f^-} x = \paren {-x}_\Z$
by definition of $c^-$, as required.

For $x = 0$, we have:

$x = 0 = -\size x$
Thus:

$\map {f^-} 0 = 0_\Z = \paren {-0}_\Z$
by definition of $c^+$, as required.

For $x < 0$, we have:

$x = -\size x$
Thus:

$\map {f^-} x = x_\Z = \paren {-\paren {-x}}_\Z$
by definition of $c^+$, as required.
$\blacksquare$





