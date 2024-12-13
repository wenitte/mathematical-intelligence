# 

Source: https://proofwiki.org/wiki/Necessary_and_Sufficient_Condition_for_Quadratic_Functional_to_be_Positive_Definite


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let

$\map P x : \closedint a b \to \R$
$\map h x : \closedint a b \to \R$.
Let $\map h x$ be continuously differentiable $\forall x \in \closedint a b$.
Suppose:

$\forall x \in \closedint a b: \map P x > 0$

Then:

$\ds \forall \map h x : \map h a = \map h b = 0 : \int_a^b \paren {P h'^2 + Q h^2} \rd x > 0$
if and only if the interval $\closedint a b$ contains no points conjugate to $a$.


Proof
Necessary Condition
Let $\map \omega x : \closedint a b \to \R$ be a continuously differentiable mapping.
Then:














\(\ds 0\)

\(=\)







\(\ds \bigintlimits {\omega h^2} a b\)





Boundary Conditions for $h$














\(\ds \)

\(=\)







\(\ds \int_a^b \map {\frac \d {\d x} } {\omega h^2} \rd x\)





Fundamental theorem of calculus



Let $\omega$ be a solution to the following equation:

$\map P {Q + \omega'} = \omega^2$
Then:














\(\ds P h'^2 + Q h^2 + \map {\frac \d {\d x} } {\omega h^2}\)

\(=\)







\(\ds P h'^2 + 2 h h' \omega + \paren {Q + \omega'} h^2\)




















\(\ds \)

\(=\)







\(\ds P h'^2 + 2 h h' \omega + \frac {\omega^2} P h^2\)




















\(\ds \)

\(=\)







\(\ds P \paren {h' + \frac \omega P h}^2\)




















\(\ds \)

\(\ge\)







\(\ds 0\)









In other words:














\(\ds \int_a^b \paren {P h'^2 + Q h^2} \rd x\)

\(=\)







\(\ds \int_a^b \paren {P h'^2 + Q h^2 + \map {\frac \d {\d x} } {\omega h^2} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_a^b P \paren {h' + \frac \omega P h}^2 \rd x\)




















\(\ds \)

\(\ge\)







\(\ds 0\)









Now we will show, that this expression never vanishes.
Aiming for a contradiction, suppose that it does vanish.
Then:

$h' + \dfrac \omega P h = 0$
By Existence-Uniqueness Theorem for First-Order Differential Equation:

$\forall x \in \closedint a b: \map h a = 0 \implies \map h x = 0$
This implies an infinite number of conjugate points.
However, the theorem assumes no conjugate points.
This is a contradiction.
Hence:

$\forall x \in \openint a b: \map h x \ne 0$
and:

$P \paren {h' + \dfrac {\omega h} P}^2 > 0$
Thus, a functional formed by a definite integral of positive definite function is positive definite.
$\Box$


Sufficient Condition
Consider the functional:

$\forall t \in \closedint 0 1: \ds \int_a^b \sqbrk {t \paren {P h^2 + Q h'^2} + \paren {1 - t} h'^2} \rd x$
By assumption:

$\ds \int_a^b \paren {Ph'^2 + Q h^2} \rd x > 0$
Since there are no conjugate points in $\closedint a b$:

$\forall x \in \openint a b: \map h x > 0$
Hence:

$\forall t \in \closedint 0 1: \ds \int_a^b \sqbrk {t \paren {P h'^2 + Q h^2} + \paren {1 - t} h'^2} \rd x > 0$
The corresponding Euler's Equation is:

$2 Q h t - \map {\dfrac \d {\d x} } {2 t P h'+ 2 h' \paren {1 - t} } = 0$
which is equivalent to:

$-\map {\dfrac \d {\d x} } {\paren {t P + \paren {1 - t} } h'} + t Q h = 0$
Let $\map h {x, t}$ be a solution to this such that:

$\forall t \in \closedint 0 1: \map h {a, t} = 0, \map {h_x} {a, t} = 1$
Suppose there exists a conjugate point $\tilde a$ to $a$ in $\closedint a b$.
In other words:

$\exists \tilde a \in \closedint a b: \map h {\tilde a, 1} = 0$
By definition, $a \ne \tilde a$.
Aiming for a contradiction, suppose $\tilde a = b$.
Then by the lemma 1:

$\ds \int_a^b \paren {P h'^2 + Q h^2} \rd x = 0$
This contradicts the assumption.
Therefore, $\tilde a \ne b$.
Thus, for $t = 1$, any other conjugate point may reside only in $\openint a b$.
Consider the following set of all points $\tuple {x, t}$:

$\set {\tuple {x, t}: \paren {\forall x \in \closedint a b} \paren {\forall t \in \closedint 0 1} \paren {\map h {x, t} } = 0}$
If it is non-empty, it represents a curve $\paren \star$ in $x - t$ plane, such that $\map {h_x} {x, t} \ne 0$.
By the Implicit Function Theorem, $\map x t$ is continuous.
By hypothesis, $\tuple {\tilde a, 1}$ lies on this curve.
Suppose the curve starts at this point.
The curve can terminate either inside the rectangle or its boundary.


This article, or a section of it, needs explaining.In particular: Clarify the below by replacing "it" wherever it occurs with a label to the specific thing that "it" refers to.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
If $\paren \star$ terminates inside the rectangle $\closedint a b \times \closedint 0 1$, it implies that there is a jump discontinuity in the value of $h$.
Therefore, it contradicts the continuity of $\map h {x, t}$ in the interval $t \in \closedint 0 1$.
If $\paren \star$ intersects the line segment $x = b, 0 \le t \le 1$, then by lemma 2 the considered functional vanishes.

This contradicts positive definiteness of the functional for all $t$.
If $\paren \star$ intersects the segment $a \le x \le b, t = 1$, then:

$\exists t_0: \paren {\map h {x, t_0} = 0} \land \paren {\map {h_x} {x, t_0} = 0}$
If $\paren \star$ intersects $a \le x \le b, t = 0$, then Euler's equation reduces to $h = 0$ with solution $h = x - a$, which vanishes only for $x = a$.
If $\paren \star$ intersects $x = a, 0 \le t \le 1$, then $\exists t_0:\map {h_x} {a, t_0} = 0$


This page needs the help of a knowledgeable authority.In particular: explain cases $t = 1$ and $x = a$If you are knowledgeable in this area, then you can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving the issues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Help}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
By Proof by Cases, no such curve exists.
Thus, the point $\tuple {\tilde a, 1}$ does not exist, since it belongs to this curve.
Hence, there are no conjugate points in the interval $\closedint a b$.
$\blacksquare$


Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: 1: Transclude the lemmata in the usual $\mathsf{Pr} \infty \mathsf{fWiki}$ style.  2: There are a number of proofs by contradiction embedded in this proof. It is important to make it clear exactly which statement is the supposition which leads to the contradiction, and link back to that statement somehow. 3: The proof is in a number of sections but there is no visual indication by (for example) double spacing or use of the qed lemma template where one section ends and the next begins.4: There are still references to "positive definite", in the title and in the proof without an actual definition of what "positive definite" actually means. It's suboptimal to gloss over this. We really need to add a page defining what a positive definite function actually is in this context -- particularly when the term itself has a far wider interpretation in mathematics in general than "never goes negative".You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Sources
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations ... (previous) ... (next): $\S 5.26$: Analysis of the Quadratic Functional $\int_a^b \paren {P h'^2 + Q h^2} \rd x$





