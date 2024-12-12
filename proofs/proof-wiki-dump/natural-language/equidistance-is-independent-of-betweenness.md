# 

Source: https://proofwiki.org/wiki/Equidistance_is_Independent_of_Betweenness



Theorem
Let $\GG$ be a formal systematic treatment of geometry containing only:

The language and axioms of first-order logic, and the disciplines preceding it
The undefined terms of Tarski's Geometry (excluding equidistance)
Some or all of Tarski's Axioms of Geometry.

In $\GG$, equidistance $\equiv$ is necessarily an undefined term with respect to betweenness $\mathsf B$.
 

Proof
Our assertion is that $\equiv$ cannot be defined in terms of $\mathsf B$.
Aiming for a contradiction, suppose that it can.
Call this assumption $\paren A$.
If $\paren A$ holds, it must hold in all systems.
Let one such system be $\tuple {\R^2, \mathsf B_1, \equiv_1}$ where:

$\R^2$ is the cartesian product of the set of real numbers with itself
$\mathsf B_1$ is a ternary relation of betweenness
$\equiv_1$ is a quaternary relation of equidistance

Let $\GG$ be the discipline preceding the given discipline, where $\GG$ is as defined above (excluding both $\equiv$ and $\mathsf B$).


The validity of the material on this page is questionable.In particular: if $\GG$ isn't strong enough to create $\R^2$, how can we use it? There is something incorrect in my presentation, particularly since we're going to use $\cdot$ and $\le$ -- GFP.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving the issues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Questionable}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Define $\mathsf B_1$ as follows:
Define the following coordinates in the $xy$-plane:














\(\ds a\)

\(=\)







\(\ds \tuple {x_1, x_2}\)




















\(\ds b\)

\(=\)







\(\ds \tuple {y_1, y_2}\)




















\(\ds c\)

\(=\)







\(\ds \tuple {z_1, z_2}\)









where $a, b, c \in \R^2$.
Let:














\(\ds \Delta x_1\)

\(=\)







\(\ds x_3 - x_2\)




















\(\ds \Delta x_2\)

\(=\)







\(\ds x_2 - x_1\)




















\(\ds \Delta y_1\)

\(=\)







\(\ds y_2 - y_1\)




















\(\ds \Delta y_2\)

\(=\)







\(\ds y_3 - y_2\)









Then:


$\mathsf{B}abc \dashv \vdash \paren {\Delta x_1 \Delta y_1 = \Delta x_2 \Delta y_2} \land$
$\paren {0 \le \Delta x_1 \Delta y_1 \land 0 \le \Delta x_2 \Delta y_2}$

Define $\equiv_1$ as follows:
Define the following coordinates in the $xy$-plane:

$a = \tuple {x_1, x_2}$
$b = \tuple {y_1, y_2}$
$c = \tuple {z_1, z_2}$
$d = \tuple {u_1, u_2}$
where $a, b, c, d \in \R^2$


$a b \equiv c d \dashv \vdash \paren {\paren {x_1 - y_1}^2 + \paren {x_2 - y_2}^2 = \paren {z_1 - u_1}^2 + \paren {z_2 - u_2}^2}$

Now, define the isomorphism $\phi$ on $\struct {\R^2, \mathsf B_2, \equiv_2}$ as:

$\phi: \R^2 \to \R^2$ on $\struct {\R^2, \mathsf B_1, \equiv_1}, \tuple {x_1, x_2} \mapsto \tuple {x_1, 2 x_2}$

This needs considerable tedious hard slog to complete it.In particular: prove that $\phi$ is an isomorphismTo discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Now consider the system:

$\struct {\R^2, \mathsf B_2, \equiv_2}$
where $\mathsf B_2$ and $\equiv_2$ are the relations defined as above, but on the elements in the images of $\mathsf B_1$ and $\equiv_1$, respectively.
Observe that $\mathsf B_1$ and $\mathsf B_2$ coincide, because in:

$\paren {x_1 - y_1} \cdot \paren {2 y_2 - 2 z_2} = \paren {2 x_2 - 2 y_2} \cdot \paren {y_1 - z_1} \land$
$\paren {0 \le \paren {x_1 - y_1} \cdot \paren {y_1 - z_1} } \land \paren {0 \le \paren {2 x_2 - 2 y_2} \cdot \paren {2 y_2 - 2 z_2} }$
we can simply factor out the $2$ and divide both sides of the equality of inequality by $2$.

But consider the elements:

$p_1 = \tuple {0, 0}$
$p_2 = \tuple {0, 1}$
$p_3 = \tuple {1, 0}$

Observe that $p_1 p_2 \equiv_1 p_1 p_3$:

$\paren {0 - 0}^2 + \paren {0 - 1}^2 = \paren {0 - 1}^2 + \paren {0 - 0}^2$

But $\map \neg {p_1 p_2 \equiv_2 p_1 p_3}$:

$\paren {0 - 0}^2 + \paren {0 - 2}^2 \ne \paren {0 - 1}^2 + \paren {0 - 0}^2$
But both $\struct {\R^2, \mathsf B_1, \equiv_1}$ and $\struct {\R^2, \mathsf B_2, \equiv_2}$ are both models of $\GG$.


This article, or a section of it, needs explaining.In particular: prove itYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Recall that if $\paren A$ holds, it must hold in all systems.
But it does not.
Hence $\paren A$ is false, from Proof by Contradiction.
$\blacksquare$


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.

This page needs the help of a knowledgeable authority.If you are knowledgeable in this area, then you can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving the issues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Help}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Also see
Betweenness Not Independent of Equidistance, which states that there are models where one can define $\mathsf B$ in terms of $\equiv$.


Sources
June 1999: Alfred Tarski and Steven Givant: Tarski's System of Geometry (Bull. Symb. Log. Vol. 5, no. 2: pp. 175 – 214) : pp. $199$ – $204$




