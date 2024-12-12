# 

Source: https://proofwiki.org/wiki/Fixed_Point_of_Mappings_is_Fixed_Point_of_Composition/General_Result



Theorem
Let $S$ be a set.
Let $n \in \N$ be a strictly positive integer.
Let $\N_n$ be the initial segment of $n$ in $\N$.
That is, let $\N_n = \set {0, 1, \dots, n-1}$.
For each $i \in \N_n$, let $f_i: S \to S$ be a mapping.
Let $x \in S$ be a fixed point of $f_i$ for each $i \in \N_n$.
Let $g = f_0 \circ f_1 \circ \dots \circ f_{n-1}$ be the composition of all the $f_i$s.

Then $x$ is a fixed point of $g$.


Proof
The proof proceeds by mathematical induction on $n$, the number of mappings.

Base Case

The validity of the material on this page is questionable.In particular: Flawed. The base case needs to be the two-element case for obvious reasons.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving the issues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Questionable}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
If $n = 1$, then $g = f_0$.
Since $x$ is a fixed point of $f_0$, it is also a fixed point of $g$.
$\Box$


Inductive Step
Suppose that the theorem holds for $n$.  We will show that it holds for $n+1$.
Let $x \in S$ be a fixed point of $f_i$ for each $i \in \N_{n+1}$.
Let $g = f_0 \circ f_1 \circ \dots \circ f_{n-1} \circ f_n$ be the composition of all the $f_i$s.
Since the theorem holds for $n$, $x$ is a fixed point of $f_0 \circ f_1 \circ \dots \circ f_{n-1}$.
By Composition of Mappings is Associative:

$g = \paren { f_0 \circ f_1 \circ \dots \circ f_{n-1} } \circ f_n$
Thus by Fixed Point of Mappings is Fixed Point of Composition (for two mappings), $x$ is a fixed point of $g$.
$\blacksquare$





