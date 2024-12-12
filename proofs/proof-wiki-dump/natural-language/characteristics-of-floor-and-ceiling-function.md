# 

Source: https://proofwiki.org/wiki/Characteristics_of_Floor_and_Ceiling_Function


This article needs to be tidied.In particular: Introduce standard $\mathsf{Pr} \infty \mathsf{fWiki}$ style for induction proof -- breaks it down and makes it easier to comprehend visuallyPlease fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.


Theorem
Let $f: \R \to \Z$ be an integer-valued function which satisfies both of the following:

$(1): \quad \map f {x + 1} = \map f x + 1$
$(2): \quad \forall n \in \Z_{> 0}: \map f x = \map f {\dfrac {\map f {n x} } n}$

Then either:

$\forall x \in \Q: \map f x = \floor x$
or:

$\forall x \in \Q: \map f x = \ceiling x$


Real Domain
Let $f: \R \to \Z$ be an integer-valued function which satisfies both of the following:

$(1): \quad \map f {x + 1} = \map f x + 1$
$(2): \quad \forall n \in \Z_{> 0}: \map f x = \map f {\dfrac {\map f {n x} } n}$

Then it is not necessarily the case that either:

$\forall x \in \R: \map f x = \floor x$
or:

$\forall x \in \R: \map f x = \ceiling x$


Proof
From $(1)$, by induction we have:

$\forall n \in \N: \map f {x + n} = \map f x + n$
and

$\forall n \in\N: \map f {x - n} = \map f x - n$
and therefore, in particular:

$(3): \quad \forall n \in \Z: \map f n = \map f 0 + n$

From $(2)$, we get














\(\ds \map f 0\)

\(=\)







\(\ds \map f {\map f 0}\)




















\(\ds \)

\(=\)







\(\ds \map f 0 + \map f 0\)





using $(3)$ and $f$ being integer valued



Hence

$\map f 0 = 0$

Thus from $(3)$ it follows that:

$\forall n \in \Z: \map f n = n$
Suppose that $\map f {\dfrac 1 2} = k \le 0$.
Then:














\(\ds k\)

\(=\)







\(\ds \map f {\dfrac 1 {1 - 2 k} \map f {\dfrac 1 2 - k} }\)




















\(\ds \)

\(=\)







\(\ds \map f {\dfrac 1 {1 - 2 k} \paren {\map f {\dfrac 1 2} - k} }\)




















\(\ds \)

\(=\)







\(\ds \map f 0\)




















\(\ds \)

\(=\)







\(\ds 0\)










We show that in this case, by induction:

$\map f {\dfrac 1 n} = 0$ for all $n \in \N$

Induction hypothesis:

$\map f {\dfrac 1 {n - 1} } = 0$
Then from $(1)$:

$\map f {\dfrac n {n - 1} } = \map f {\dfrac 1 {n - 1} + 1} = 0 + 1 = 1$
so:














\(\ds \map f {\dfrac 1 n}\)

\(=\)







\(\ds \map f {\dfrac 1 n \map f {\dfrac n {n - 1} } }\)




















\(\ds \)

\(=\)







\(\ds \map f {\dfrac 1 {n - 1} }\)





using $(2)$














\(\ds \)

\(=\)







\(\ds 0\)









Finally, we show by induction on $m$ that even:

$\map f {\dfrac m n} = 0$
for $m \in \set {1, \ldots, n - 1}$.

Above we have shown this for $m = 1$.
Let $1 \le m < n$. 
If $m \divides n$, then

$\map f {\dfrac m n} = \map f {\dfrac 1 {n / m} } = 0$
Otherwise, write:

$n = \paren {k - 1} m + r$
Then:

$k > 1$
and:

$1 \le r \le m - 1$
We therefore have:

$k m = n + m - r$
so by the induction hypothesis:

$\map f {\dfrac {k m} n} = \map f {1 + \dfrac {m - r} n} = 1 + \map f {\dfrac {m - r} n} = 1$
Then:














\(\ds \map f {\dfrac m n}\)

\(=\)







\(\ds \map f {\dfrac 1 m \map f {\dfrac {m k} n} }\)




















\(\ds \)

\(=\)







\(\ds \map f {\dfrac 1 m}\)




















\(\ds \)

\(=\)







\(\ds 0\)










By $(1)$, this shows that

$\map f {\dfrac 1 2} \le 0 \implies \map f x = \floor x$
for all rational $x$.

Suppose that $\map f {\dfrac 1 2} = k > 0$.
Then the integer-valued function $g: \R \to \Z$ satisfies:

$\map g x = -\map f {-x}$
satisfies $(1)$ and $(2)$, and also:














\(\ds \map g {\dfrac 1 2}\)

\(=\)







\(\ds 1 - \map f {\dfrac 1 2}\)




















\(\ds \)

\(\ge\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \map f x\)

\(=\)







\(\ds -\map g {-x}\)




















\(\ds \)

\(=\)







\(\ds -\floor {-x}\)




















\(\ds \)

\(=\)







\(\ds \ceiling x\)





Floor of Negative equals Negative of Ceiling




Thus:

$\map f {\dfrac 1 2} > 0 \implies \map f x = \ceiling x$
for all rational $x$.
$\blacksquare$


Historical Note
The result Characteristics of Floor and Ceiling Function was presented by Peter Eisele and Karl Peter Hadeler in $1990$.
The previous work done in $1905$ by Georg Hamel to establish that the result does not necessarily hold in the real domain is to be noted.


Sources
1990: P. Eisele and K.P. Hadeler: Games of cards, dynamical systems, and a characterization of the floor and ceiling functions (Amer. Math. Monthly Vol. 97: pp. 466 – 477)  www.jstor.org/stable/2323829
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Exercise $49$




