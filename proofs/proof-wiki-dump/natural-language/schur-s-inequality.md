# 

Source: https://proofwiki.org/wiki/Schur%27s_Inequality

Theorem
Let $x, y, z \in \R_{\ge 0}$ be positive real numbers.
Let $t \in \R, t > 0$ be a (strictly) positive real number.

Then:

$x^t \paren {x - y} \paren {x - z} + y^t \paren {y - z} \paren {y - x} + z^t \paren {z - x} \paren {z - y} \ge 0$

The equality holds if and only if either:

$x = y = z$
Two of them are equal and the other is zero.

When $t$ is a positive even integer, the inequality holds for all real numbers $x, y, z$.


Proof
We note that the inequality, as stated, is symmetrical in $x, y$ and $z$.
Without loss of generality, we can assume that $x \ge y \ge z \ge 0$.

Consider the expression:

$\paren {x - y} \paren {x^t \paren {x - z} - y^t \paren {y - z}} + z^t \paren {x - z} \paren {y - z}$

We see that every term in the above is non-negative. So, directly:

$(1): \quad \paren {x - y} \paren {x^t \paren {x - z} - y^t \paren {y - z}} + z^t \paren {x - z} \paren {y - z} \ge 0$

If $x = y = z$, all of $x - y$, $x - z$ and $y - z$ are $0$.
Thus equality holds.
Inspection on a case-by-case basis provides evidence for the other conditions for equality.

To show these are the only cases, we suppose $x, y, z$ are not equal.
Then $x > y > z \ge 0$.
We thus have $x - z > y - z$.
Hence:














\(\ds \)

\(\)







\(\ds \paren {x - y} \paren {x^t \paren {x - z} - y^t \paren {y - z} } + z^t \paren {x - z} \paren {y - z}\)




















\(\ds \)

\(\ge\)







\(\ds \paren {x - y} \paren {x^t \paren {x - z} - y^t \paren {y - z} }\)





second term is non-negative














\(\ds \)

\(>\)







\(\ds \paren {x - y} \paren {x^t \paren {y - z} - y^t \paren {y - z} }\)




















\(\ds \)

\(=\)







\(\ds \paren {x - y} \paren {y - z} \paren {x^t  - y^t}\)




















\(\ds \)

\(>\)







\(\ds 0\)





$x > y > z$




Now we suppose two numbers are equal, but the other is neither the same number or $0$.
If $x = y > z > 0$:














\(\ds \)

\(\)







\(\ds \paren {x - y} \paren {x^t \paren {x - z} - y^t \paren {y - z} } + z^t \paren {x - z} \paren {y - z}\)




















\(\ds \)

\(=\)







\(\ds z^t \paren {x - z} \paren {y - z}\)





$x - y = 0$














\(\ds \)

\(>\)







\(\ds 0\)





$z > 0$, $x - z = y - z > 0$



If $x > y = z \ge 0$:














\(\ds \)

\(\)







\(\ds \paren {x - y} \paren {x^t \paren {x - z} - y^t \paren {y - z} } + z^t \paren {x - z} \paren {y - z}\)




















\(\ds \)

\(=\)







\(\ds \paren {x - y} \paren {x^t \paren {x - z} }\)





$y - z = 0$














\(\ds \)

\(>\)







\(\ds 0\)





$x > 0$, $x - y = x - z > 0$



This shows the equality conditions is if and only if.

$(1)$ can then be rearranged to Schur's inequality.
$\Box$

Now, let $t$ be a positive even integer.

Without loss of generality, we can assume that $x \ge y \ge z$.
By Pigeonhole Principle, at least $2$ of them have the same sign.

Suppose $x, y$ are positive.
Once again we consider the expression:

$\paren {x - y} \paren {x^t \paren {x - z} - y^t \paren {y - z}} + z^t \paren {x - z} \paren {y - z}$
The first term is still non-negative.

The second term is non-negative, since:

$z^t \ge 0 \quad$ Even Power is Non-Negative
$x \ge z$, $y \ge z$
Thus we can still conclude $(1)$, which can then be rearranged to Schur's inequality.

Suppose $y, z$ are negative.
Then $-z, -y$ are positive, and $-z \le -y \le -x$.

Substituting $x, y, z$ for $-z, -y, -x$ in the above, the result follows.
$\blacksquare$


Source of Name
This entry was named for Issai Schur.





