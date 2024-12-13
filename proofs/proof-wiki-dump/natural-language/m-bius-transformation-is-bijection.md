# 

Source: https://proofwiki.org/wiki/M%C3%B6bius_Transformation_is_Bijection

Theorem
Let $a, b, c, d \in \C$ be complex numbers.
Let $f: \overline \C \to \overline \C$ be the Möbius transformation:

$\map f z = \begin {cases} \dfrac {a z + b} {c z + d} & : z \ne -\dfrac d c \\
\infty & : z = -\dfrac d c \\
\dfrac a c & : z = \infty \\
\infty & : z = \infty \text { and } c = 0 \end {cases}$
where $\overline \C$ denotes the extended complex plane.

Then:

$f: \overline \C \to \overline \C$ is a bijection
if and only if:

$a c - b d \ne 0$


Restriction to Reals
Let $a, b, c, d \in \R$ be real numbers.
Let $f: \R^* \to \R^*$ be the Möbius transformation restricted to the real numbers:

$\map f x = \begin {cases} \dfrac {a x + b} {c x + d} & : x \ne -\dfrac d c \\
\infty & : x = -\dfrac d c \\
\dfrac a c & : x = \infty \\
\infty & : x = \infty \text { and } c = 0 \end {cases}$

Then:

$f: \R^* \to \R^*$ is a bijection
if and only if:

$a c - b d \ne 0$


Proof
We demonstrate that $f$ is injective if and only if $b c - a d \ne 0$.














\(\ds \map f {z_1}\)

\(=\)







\(\ds \map f {z_2}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \dfrac {a z_1 + b} {c z_1 + d}\)

\(=\)







\(\ds \dfrac {a z_2 + b} {c z_2 + d}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \paren {a z_1 + b} \paren {c z_2 + d}\)

\(=\)







\(\ds \paren {a z_2 + b} \paren {c z_1 + d}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds a c z_1 z_2 + b c z_2 + a d z_1 + b c\)

\(=\)







\(\ds a c z_2 z_1 + b c z_1 + a d z_2 + b c\)














\(\ds \leadstoandfrom \ \ \)





\(\ds b c z_2 + a d z_1\)

\(=\)







\(\ds b c z_1 + a d z_2\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \paren {b c - a d} z_2\)

\(=\)







\(\ds \paren {b c - a d} z_1\)









demonstrating that when $z \ne -\dfrac d c$ and $z \ne \infty$:

$\map f {z_1} = \map f {z_2} \implies z_1 = z_2$ if and only if $b c - a d \ne 0$

It remains to investigate the edge cases.
First we look at the case where $c \ne 0$.














\(\ds \dfrac {a z + b} {c z + d}\)

\(=\)







\(\ds \dfrac a c\)














\(\ds \leadsto \ \ \)





\(\ds c \paren {a z + b}\)

\(=\)







\(\ds a \paren {c z + d}\)














\(\ds \leadsto \ \ \)





\(\ds a c z + b c\)

\(=\)







\(\ds a c z + a d\)














\(\ds \leadsto \ \ \)





\(\ds b c - a d\)

\(=\)







\(\ds 0\)









That is, for $z \in \R$:

$\dfrac {a z + b} {c z + d} = \dfrac c a$ only if $b c - a d = 0$
and so if $\map f {z_1} = \map f {z_2} = \dfrac a c$ it follows that $z_1 = z_2 = \infty$.

The case where $\map f {z_1} = \map f {z_2} = \infty$ follows by definition either that:

$z_1 = z_2 = \dfrac a c$ when $c \ne 0$
or:

$z_1 = z_2 = \infty$ when $c = 0$.

Thus we have that $f$ is an injection.

Now we investigate the inverse of $f$.
From Inverse Element of Injection we have that:

$\map f z = w \implies \map {f^{-1} } w = z$
So, let $w = \map f z$.

First we recall that if $z = -\dfrac d c$, then $c z + d = 0$ and so $\dfrac {a z + b} {c z + d}$ is undefined.
Hence the need to investigate that case separately.

Take the general case, where $z \ne -\dfrac d c$ and $z \ne \infty$:














\(\ds w\)

\(=\)







\(\ds \dfrac {a z + b} {c z + d}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds w \paren {c z + d}\)

\(=\)







\(\ds a z + b\)














\(\ds \leadstoandfrom \ \ \)





\(\ds w c z + w d\)

\(=\)







\(\ds a z + b\)














\(\ds \leadstoandfrom \ \ \)





\(\ds w c z - a z\)

\(=\)







\(\ds b - w d\)














\(\ds \leadstoandfrom \ \ \)





\(\ds z \paren {c w - a}\)

\(=\)







\(\ds - d w + b\)














\(\ds \leadstoandfrom \ \ \)





\(\ds z\)

\(=\)







\(\ds \dfrac {- d w + b} {c w - a}\)









Thus we have that:

$\map {f^{-1} } w = \dfrac {- d w + b} {c w - a}$
which is again a Möbius transformation, defined over all $w \in \C$ except where $w = \dfrac a c$.
We define:

$\map {f^{-1} } {\dfrac a c} = \infty$
and:

$\map {f^{-1} } \infty = -\dfrac d c$
except when $c = \infty$, where we define:

$\map {f^{-1} } \infty = \infty$
Hence we have that the inverse of $f$ is another Möbius transformation.

So as $f^{-1}$ is also a Möbius transformation, it follows that:

$\map {f^{-1} } {w_1} = \map {f^{-1} } {w_2} \implies w_1 = w_2$ if and only if $\paren {-d} c - b \paren {-a} = 0$
which is the same thing as $b c - a d \ne 0$.

Again, we have that $\dfrac {- d w + b} {c w - a} = -\dfrac d c$ only if $\paren {-d} c - b \paren {-a} = 0$.
As seen above, this is the same thing as $b c - a d \ne 0$.
Finally, we note that:

$\map {f^{-1} } {w_1} = \map {f^{-1} } {w_2} = \infty \implies w_1 = w_2 = \dfrac {-d} c$

Thus we have that $f^{-1}$ is injective if and only if $b c - a d \ne 0$.

It follows from Injection is Bijection iff Inverse is Injection that $f$ is a bijection.
$\blacksquare$





