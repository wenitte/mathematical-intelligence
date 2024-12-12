# 

Source: https://proofwiki.org/wiki/Existence_of_Banach_Limits



Theorem
Let $\struct {\map {\ell^\infty} \R, \norm \cdot_\infty}$ be the normed vector space of bounded sequences on $\R$. 
Let $\struct {\paren {\map {\ell^\infty} \R}^\ast, \norm \cdot_{\paren {\ell^\infty}^\ast} }$ be the normed dual space of $\struct {\map {\ell^\infty} \R, \norm \cdot_\infty}$.

Then there exists a Banach limit $L \in \paren {\map {\ell^\infty} \R}^\ast$.


Proof
Let $\map c \R$ be the set of the convergent real sequences.
Then:

$\map c \R \subseteq \map {\ell^\infty} \R$
is a linear subspace in view of:

Convergent Real Sequence is Bounded
Linear Combination of Convergent Sequences in Topological Vector Space is Convergent

Define a mapping $f_0 : \map c \R \to \R$ by:

$\ds \map {f_0} {\sequence {x_n} } := \lim _{n \mathop \to \infty} x_n$

This page has been identified as a candidate for refactoring of basic complexity.In particular: be good to get the lemmata into their own pages. It's on my list.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Lemma 1
$f_0 \in {\map c \R}^\ast$ such that:

$\norm {f_0}_{ {\map c \R}^\ast} = 1$
and:

$\map {f_0} {\mathbf 1} = 1$
Proof of Lemma 1
First, $f_0$ is linear, since Infinite Limit Operator is Linear Mapping.
Furthermore, $f_0$ is bounded with:

$\norm {f_0}_{ {\map c \R}^\ast} = 1$
since:

$\ds \size {\map {f_0} {\sequence {x_n} } } = \size { \lim _{n \mathop \to \infty} x_n } \le \sup_n \size {x_n} = \norm {\sequence {x_n} }_\infty$
and:

$\map {f_0} {\mathbf 1} = 1 = \norm {\mathbf 1}_\infty$
$\Box$

By Hahn-Banach Theorem there is an extension $f \in \paren {\ell^\infty}^\ast$ of $f_0$ such that:

$(a):\quad \norm f_{\paren {\ell^\infty}^\ast} = \norm {f_0}_{ {\map c \R}^\ast} = 1$
Observe that by Lemma 1:

$(b):\quad \map f {\mathbf 1} = \map {f_0} {\mathbf 1} = 1$

Define a mapping $L : \map {\ell^\infty} \R \to \R$ by:

$\ds \map L {\sequence {x_n} } := \map f {\sequence {x_0, \frac {x_0 + x_1} 2, \frac {x_0 + x_1 + x_2} 3, \ldots } }$
Lemma 2
$L \in \paren {\map {\ell^\infty} \R}^\ast$ such that:

$\norm L_{\paren {\ell^\infty}^\ast} = 1$
and:

$\map L {\mathbf 1} = 1$
Proof of Lemma 2
$L$ is linear, since the mapping:

$\ds \sequence {x_n} \mapsto \frac { x_0 + \cdots + x_k } {k+1}$
is linear for each $k \in \N$.
Moreover, observe:














\(\ds \size {\map L {\sequence {x_n} } }\)

\(=\)







\(\ds \size { \map f {\sequence {x_0, \frac {x_0 + x_1} 2, \frac {x_0 + x_1 + x_2} 3, \ldots } } }\)




















\(\ds \)

\(\le\)







\(\ds \norm f_{\paren {\map {\ell^\infty} \R}^\ast} \norm {\sequence {x_0, \frac {x_0 + x_1} 2, \frac {x_0 + x_1 + x_2} 3, \ldots } }_{\map {\ell^\infty} \R }\)





Definition of $\norm f_{\paren {\map {\ell^\infty} \R}^\ast}$














\(\ds \)

\(=\)







\(\ds \norm {\sequence {x_0, \frac {x_0 + x_1} 2, \frac {x_0 + x_1 + x_2} 3, \ldots } }_{\map {\ell^\infty} \R }\)





by $(a)$














\(\ds \)

\(\le\)







\(\ds \norm {\sequence {x_n} }_{\map {\ell^\infty} \R}\)









and:

$\map L {\mathbf 1} = \map f {\mathbf 1} = 1 = \norm {\mathbf 1}_\infty$
by $(b)$.
$\Box$

We check that $L$ is a Banach limit.
First, we check that for all $x = \sequence {x_n} \in \map {\ell^\infty} \R$:

$\map L x \ge 0$
if $x_n \ge 0$ for all $n \in \N$.
Observe that:

$(c):\quad \ds \forall n \in \N : \size {x_n - \frac {\norm x_{\map {\ell^\infty} \R} } 2} \le \frac {\norm x_{\map {\ell^\infty} \R} } 2$
since:

$x_n \in \closedint 0 {\norm x_{\map {\ell^\infty} \R} }$
Thus, by Lemma 2:














\(\ds \frac {\norm x_{\map {\ell^\infty} \R} } 2 - \map L {\sequence {x_n} }\)

\(=\)







\(\ds \frac {\norm x_{\map {\ell^\infty} \R} } 2 \map L {\mathbf 1} - \map L {\sequence {x_n} }\)





as $\map L {\mathbf 1} = 1$














\(\ds \)

\(=\)







\(\ds \map L { \sequence { \frac {\norm x_{\map {\ell^\infty} \R} } 2 - x_n} }\)





Linearity of $L$














\(\ds \)

\(\le\)







\(\ds \norm L_{\paren {\ell^\infty}^\ast} \norm { \sequence { \frac {\norm x_{\map {\ell^\infty} \R} } 2 - x_n} }_{\map {\ell^\infty} \R}\)





Definition of $\norm L_{\paren {\ell^\infty}^\ast}$














\(\ds \)

\(=\)







\(\ds \norm { \sequence { \frac {\norm x_{\map {\ell^\infty} \R} } 2 - x_n} }_{\map {\ell^\infty} \R}\)





as $\norm L_{\paren {\ell^\infty}^\ast} = 1$














\(\ds \)

\(\le\)







\(\ds \frac {\norm x_{\map {\ell^\infty} \R} } 2\)





by $(c)$



That is:

$0 \le \map L {\sequence {x_n} }$

Secondly:














\(\ds \map L {\sequence {x_n} } - \map L {S \sequence {x_n} }\)

\(=\)







\(\ds \map f {\sequence {x_0 - x_1, \frac {x_0 - x_2} 2, \frac {x_0 - x_3} 3, \ldots } }\)




















\(\ds \)

\(=\)







\(\ds \map {f_0} {\sequence {x_0 - x_1, \frac {x_0 - x_2} 2, \frac {x_0 - x_3} 3, \ldots } }\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \frac {x_0 - x_n} n\)




















\(\ds \)

\(=\)







\(\ds 0\)










Finally, by Lemma 2:

$\map L {\mathbf 1} = 1$
$\blacksquare$





