# 

Source: https://proofwiki.org/wiki/Continuous_Midpoint-Convex_Function_is_Convex



Theorem
Let $f$ be a real function which is defined on a real interval $I$.
Let $f$ be midpoint-convex and continuous on $I$.

Then $f$ is convex.


Proof
Let $x, y \in I$ and let $t \in \closedint 0 1$.
Let $\sequence {t_n}_{n \mathop \in \N}$ be a sequence of rational numbers in $\closedint 0 1$ converging to $t$.

It follows that:














\(\ds \lim \limits_{n \mathop \to\infty} \paren {t_n x + \paren {1 - t_n} y}\)

\(=\)







\(\ds t x + \paren {1 - t} y\)









and:














\(\ds \lim \limits_{n \mathop \to \infty} \paren {t_n \map f x + \paren {1 - t_n} \map f y}\)

\(=\)







\(\ds t \map f x + \paren {1 - t} \map f y\)










This article, or a section of it, needs explaining.In particular: Follows from where? Links needed to results quotedYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

From Midpoint-Convex Function is Rational Convex, $f$ is rational convex. 
From Continuous Mapping is Sequentially Continuous, $f$ is sequentially continuous.


This article, or a section of it, needs explaining.In particular: Technically, we have sequential continuity defined under the $\mathsf{Pr} \infty \mathsf{fWiki}$ link above only in terms of the general topological space. In order to connect all the pieces here, we need either to invoke the clauses which state that the real number line is a topological space under which the properties of continuity "mean the same thing" as the traditionally real-analytical definition of continuity, or we need to define sequential continuity in terms of real analysis.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

As $f$ is rational convex:

$\forall n \in \N: \map f {t_n x + \paren {1 - t_n} y} \le t_n \map f x + \paren {1 - t_n} \map f y$

From sequential continuity of $f$ and Inequality Rule for Real Sequences:














\(\ds \map f {t x + \paren {1 - t} y}\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map f {t_n x + \paren {1 - t_n} y}\)




















\(\ds \)

\(\le\)







\(\ds \lim_{n \mathop \to \infty} \paren {t_n \map f x + \paren {1 - t_n} \map f y}\)




















\(\ds \)

\(=\)







\(\ds t \map f x + \paren {1 - t} \map f y\)









which completes the proof.
$\blacksquare$


Also see
Continuous Strictly Midpoint-Convex Function is Strictly Convex
Continuous Midpoint-Concave Function is Concave
Continuous Strictly Midpoint-Concave Function is Strictly Concave


Sources
1994: Brian S. Thomson: Symmetric Properties of Real Functions: $\S 4.3$




