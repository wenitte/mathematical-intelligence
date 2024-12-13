# 

Source: https://proofwiki.org/wiki/Interior_of_Convex_Angle_is_Convex_Set


This article needs to be linked to other articles.In particular: Interior of AngleYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $\mathbf v, \mathbf w$ be two non-zero vectors in $\R^2$, and let $p$ be a point in $\R^2$.

Suppose that the angle between $\mathbf v$ and $\mathbf w$ is a convex angle.

Then the set 

$U = \set {p + s t \mathbf v + \paren {1 - s} t \mathbf w : s \in \openint 0 1, t \in \R_{>0} }$
is a convex set.


Proof
Let $p_1, p_2 \in U$.
Then for $i \in \set {1, 2}$, $p_i = p + s_i t_i \mathbf v + \paren {1 - s_i} t_i \mathbf w$ for some $s_i \in \openint 0 1, t_i \in \R_{>0}$.



Without loss of generality, assume that $t_1 \le t_2$.
Suppose that $q \in \R^2$ lies on the line segment joining $p_1$ and $p_2$, so:














\(\ds q\)

\(=\)







\(\ds p + s_1 t_1 \mathbf v + \paren {1 - s_1} t_1 \mathbf w + s \paren {p + s_2 t_2 \mathbf v + \paren {1 - s_2} t_2 \mathbf w - p - s_1 t_1 \mathbf v - \paren {1 - s_1} t_1 \mathbf w}\)





for some $s \in \openint 0 1$














\(\ds \)

\(=\)







\(\ds p + \paren {\paren {1 - s} s_1 t_1 + s s_2 t_2} \mathbf v + \paren {\paren {1 - s} \paren {1 - s_1} t_1 + s \paren {1 - s_2} t_2} \mathbf w\)




















\(\ds \)

\(=\)







\(\ds p + \dfrac {\paren {1 - s} s_1 t_1 + s s_2 t_2} r r \mathbf v + \dfrac {t_1 + s t_2 - s t_1 - \paren {1 - s} s_1 t_1 - s s_2 t_2} r r \mathbf w\)





where $r = t_1 + s \paren {t_2 - t_1}$














\(\ds \)

\(=\)







\(\ds p + \dfrac {\paren {1 - s} s_1 t_1 + s s_2 t_2} r r \mathbf v + \paren {1 - \dfrac {\paren {1 - s} s_1 t_1 + s s_2 t_2} r} r \mathbf w\)









As $t_1 \le t_2$, it follows that $r \in \R_{>0}$.

We have:

$\dfrac {\paren {1 - s} s_1 t_1 + s s_2 t_2} r > 0$
and so:














\(\ds 1 - \dfrac {\paren {1 - s} s_1 t_1 + s s_2 t_2} r\)

\(=\)







\(\ds \dfrac {\paren {1 - s} \paren {1 - s_1} t_1 + s \paren {1 - s_2} t_2} r\)




















\(\ds \)

\(>\)







\(\ds 0\)









It follows that:

$\dfrac {\paren {1 - s} s_1 t_1 + s s_2 t_2} r \in \openint 0 1$
Then $q \in U$.
It follows by definition that $U$ is convex.
$\blacksquare$





