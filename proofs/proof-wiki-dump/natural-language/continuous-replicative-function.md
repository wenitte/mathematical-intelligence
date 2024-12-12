# 

Source: https://proofwiki.org/wiki/Continuous_Replicative_Function



Theorem
Let $f: \R \to \R$ be a real function.
Let $f$ be continuous on $\R$.
Let $f$ also be a replicative function.

Then $f$ is of the form:

$\map f x = \paren {x - \dfrac 1 2} a$
where $a \in \R$.


Proof
Let $f$ be a replicative function.
Then:

$\forall n > 0: \map f {n x + 1} - \map f {n x} = \map f {x + 1} - \map f x$
If $f$ is then also continuous:

$\forall x \in \R: \map f {x + 1} - \map f x$
and so:

$\map g x = \map f x - c \floor x$
is both replicative and periodic.
We have:

$\ds \int_0^1 e^{2 \pi i n x} \map g x \rd x = \dfrac 1 n \int_0^1 e^{2 \pi y} \map g y \rd y$
Expanding in a Fourier series shows:

$\map g x = \paren {x - \dfrac 1 2} a$
for $0 < x < 1$.
Thus it follows that:

$\map f x = \paren {x - \dfrac 1 2} a$
$\blacksquare$


This article needs to be linked to other articles.In particular: The above needs to be linked to the results used.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Historical Note
Donald E. Knuth in his The Art of Computer Programming attributes this result to  Nicolaas Govert de Bruijn, but gives no details as to where this result may be found.


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Exercise $40$




