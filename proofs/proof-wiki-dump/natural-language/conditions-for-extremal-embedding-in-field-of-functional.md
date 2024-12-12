# 

Source: https://proofwiki.org/wiki/Conditions_for_Extremal_Embedding_in_Field_of_Functional


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $J$ be a functional such that:

$\ds J \sqbrk {\mathbf y} = \int_a^b \map F {x, \mathbf y, \mathbf y'} \rd x$
Let $\gamma$ be an extremal of $J$, defined by $\mathbf y = \map {\mathbf y} x$ for $x \in \closedint a b$.
Suppose:

$\forall x \in \closedint a b: \map \det {F_{\mathbf y' \mathbf y'} } \ne 0$
Suppose no points conjugate to $\paren {a, \map {\mathbf y} a}$ lie on $\gamma$.

Then $\gamma$ can be embedded in a field.


Proof
Let $c \in \R$ be conjugate to $a$, such that $c < a$.
By assumption:

$c \notin \closedint a b$
Hence, there exists a set $\closedint c b$ such that:

$\closedint c b = \closedint c a \cup \closedint a b$
where $\size {c - a} > 0$.
By there exists a real point between two real points:

$\exists \epsilon: \size {c - a} > \epsilon > 0$
Therefore, there exists $\epsilon > 0$ such that:

$\gamma$ can be extended onto the whole interval $\closedint {a - \epsilon} b$, where extension means definition of some mapping in $\hointr {a - \epsilon} a$

This article, or a section of it, needs explaining.In particular: the author provides this as a condition, but does a definability affect existence ?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
the interval $\closedint {a - \epsilon} b$ contains no points conjugate to $a$.
Consider a family of extremals leaving the point $\tuple {a - \epsilon, \map {\mathbf y} {a - \epsilon} }$.
There are no points conjugate to $a - \epsilon$ in $\closedint {a - \epsilon} b$.
Hence, for $x \in \closedint a b$ no two extremals in this family which are sufficiently close to the original extremal $\gamma$ can intersect.


This article, or a section of it, needs explaining.In particular: Follows from the definition, but a picture or a better explanation would helpYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Since all the functions are extremals, they satisfy same differential equations.
Lack of intersection implies different boundary conditions.
Denote these conditions collectively as $\map {\boldsymbol \psi} {x, \mathbf y} = \map {\mathbf y'} x$.
Thus, in some region $R$ containing $\gamma$ extremals sufficiently close to $\gamma$ define a central field in which $\gamma$ is embedded.
By Central Field is Field of Functional, $\gamma$ can be embedded in the field of functional.
$\blacksquare$


Sources
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations ... (previous) ... (next): $\S 6.32$: The Field of a Functional




