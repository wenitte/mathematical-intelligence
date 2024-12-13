# 

Source: https://proofwiki.org/wiki/Joining_Arcs_makes_Another_Arc

Theorem
Let $T$ be a topological space.
Let $\mathbb I \subseteq \R$ be the closed unit interval $\closedint 0 1$.
Let $a, b, c$ be three distinct points of $T$.
Let $f, g: \mathbb I \to T$ be arcs in $T$ from $a$ to $b$ and from $b$ to $c$ respectively.
Let $h: \mathbb I \to T$ be the mapping given by:

$\map h x = \begin{cases}
\map f {2 x} & : x \in \closedint 0 {\dfrac 1 2} \\
\map g {2 x - 1} & : x \in \closedint {\dfrac 1 2} 1
\end{cases}$
Then either:

$h$ is an arc in $T$
or

There exists some restriction of $h$ which, possibly after reparametrisation, is an arc in $T$.


Proof
From Arc in Topological Space is Path, $f$ and $g$ are also paths in $T$.
So by Joining Paths makes Another Path it follows that $h$ is a path in $T$.
Now if $\Img f \cap \Img g = b$ it can be seen that:

$\forall x \in \Img h : x = \begin{cases}
\map f y & \text {for some $y \in \closedint 0 {\dfrac 1 2}$}, \text{ or} \\
\map g z & \text {for some $z \in \closedint {\dfrac 1 2} 1$}
\end{cases}$
and it follows that $h$ is an injection, and therefore an arc.


There is believed to be a mistake here, possibly a typo.In particular: that should be an XOR, really. And the intervals for $y$ and $z$ are simply $I$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by reviewing it, and either correcting it or adding some explanatory material as to why you believe it is actually correct after all.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mistake}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
On the other hand, suppose:

$\exists y \in \closedint 0 {\dfrac 1 2}: \exists z \in \closedint {\dfrac 1 2} 1: \map f y = \map g z$
such that $\map f y \ne b$.


This needs considerable tedious hard slog to complete it.In particular: It remains to show that you can build an arc out of the bits up till where the arcs cross. It's intuitively obvious but requires some analysis work.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
$\blacksquare$





