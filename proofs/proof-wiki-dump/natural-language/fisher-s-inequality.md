# 

Source: https://proofwiki.org/wiki/Fisher%27s_Inequality


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
For a BIBD $\struct {v, k, \lambda}$, the number of blocks $b$ must be greater than or equal to the number of points $v$:

$ b \ge v$


Proof
Let $A$ be the incidence matrix.
By Product of Incidence Matrix of BIBD with its Transpose, we have that:

$A^\intercal \cdot A = \begin{bmatrix}
r & \lambda & \cdots & \lambda \\
\lambda & r & \cdots & \lambda \\
\vdots & \vdots & \ddots & \vdots \\
\lambda & \lambda & \cdots & r \\
\end{bmatrix}$
From Necessary Condition for Existence of BIBD:

$r > \lambda$
So we can write $r = \lambda + \mu$ for some $\mu > 0$ and so:

$A^\intercal \cdot A = \begin{bmatrix}
\lambda + \mu & \lambda & \cdots & \lambda \\
\lambda & \lambda + \mu & \cdots & \lambda \\
\vdots & \vdots & \ddots & \vdots \\
\lambda & \lambda & \cdots & \lambda + \mu \\
\end{bmatrix}$
This is a combinatorial matrix of order $v$.
So:














\(\ds \map \det {A^\intercal \cdot A}\)

\(=\)







\(\ds \mu^{v - 1} \paren {\mu + v \lambda}\)





Determinant of Combinatorial Matrix














\(\ds \)

\(=\)







\(\ds \paren {r + \paren {v - 1} \lambda} \paren {r - \lambda}^{v - 1}\)




















\(\ds \)

\(=\)







\(\ds r k \paren {r - \lambda}^{v - 1}\)





Necessary Condition for Existence of BIBD




This article contains statements that are justified by handwavery.In particular: obviousYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Now, since $k < v$ (this is obvious) and using the properties of a BIBD, we get that $r > \lambda$. 
So $\map \det {A^\intercal A} \ne 0$.
Since $A^\intercal A$ is a $v \times v$ matrix, then the rank, $\rho$, of $A^\intercal A = v$.
Using the facts that $\map \rho {A^\intercal A} \le \map \rho A$, and $\map \rho A \le b$ (since $A$ only has $b$ columns), we have that:

$v \le \map \rho A \le b$
$\blacksquare$


This article, or a section of it, needs explaining.In particular: Some "basic properties" here need to be linked, in order that the general thrust of this can be understood.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

This article, or a section of it, needs explaining.In particular: We can probably lose most of the fiddly stuff at the end by noting that as $\lambda$ and $\mu$ are both $>0$ then so is the determinant, and go straight to the last-line result about rank.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Source of Name
This entry was named for Ronald Aylmer Fisher.





