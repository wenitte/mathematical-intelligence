# 

Source: https://proofwiki.org/wiki/Carath%C3%A9odory%27s_Theorem_(Analysis)

This proof is about Carathéodory's Theorem in the context of Analysis. For other uses, see Carathéodory's Theorem.



Theorem
Let $I \subseteq \R$.
Let $c \in I$ be an interior point of $I$.


The term Definition:Interior Point as used here has been identified as being ambiguous.If you are familiar with this area of mathematics, you may be able to help improve $\mathsf{Pr} \infty \mathsf{fWiki}$ by determining the precise term which is to be used.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Disambiguate}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.

This article, or a section of it, needs explaining.In particular: In this case, there appears not to be a definition for "interior point" which appropriately captures the gist of this. It is clearly a point inside a real interval, but the concept has not yet been defined.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

Let $f : I \to \R$ be a real function.
Then $f$ is differentiable at $c$ if and only if:

There exists a real function $\varphi : I \to \R$ that is continuous at $c$ and satisfies:
$(1): \quad \forall x \in I: \map f x - \map f c = \map \varphi x \paren {x - c}$
$(2): \quad \map \varphi c = \map {f'} c$


Proof
Necessary Condition
Suppose $f$ is differentiable at $c$.
Then by definition $\map {f'} c$ exists.
So we can define $\varphi$ by:

$\map \varphi x = \begin{cases}
\dfrac {\map f x - \map f c} {x - c} & : x \ne c, x \in I \\
\map {f'} c & : x = c
\end{cases}$
Condition $(2)$, that $\varphi$ is continuous at $c$, is satisfied, since:














\(\ds \map \varphi c\)

\(=\)







\(\ds \map {f'} c\)





Definition of $\varphi$














\(\ds \)

\(=\)







\(\ds \lim_{x \mathop \to c} \frac {\map f x - \map f c} {x - c}\)





Definition of Derivative














\(\ds \)

\(=\)







\(\ds \lim_{x \mathop \to c} \map \varphi x\)





Definition of $\varphi$



Finally, condition $(1)$ is vacuous for $x = c$.
For $x \ne c$, it follows from the definition of $\varphi$ by dividing both sides of $(1)$ by $x - c$.
$\Box$


Sufficient Condition
Suppose a $\varphi$ as in the theorem statement exists.
Then for $x \ne c$, we have that:

$\map \varphi x = \dfrac {\map f x - \map f c} {x - c}$
Since $\varphi$ is continuous at $c$:

$\ds \map \varphi c = \lim_{x \mathop \to c} \map \varphi x = \lim_{x \mathop \to c} \frac {\map f x - \map f c} {x - c}$

That is, $f$ is differentiable at $c$, and $\map {f'} c = \map \varphi c$.
$\blacksquare$


Source of Name
This entry was named for Constantin Carathéodory.





