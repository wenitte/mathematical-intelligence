# 

Source: https://proofwiki.org/wiki/Characterization_of_Measures



Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Denote $\overline \R_{\ge 0}$ for the set of positive extended real numbers.

A mapping $\mu: \Sigma \to \overline \R_{\ge 0}$ is a measure if and only if:

$(1):\quad \map \mu \O = 0$
$(2):\quad \mu$ is finitely additive
$(3):\quad$ For every increasing sequence $\sequence {E_n}_{n \mathop \in \N}$ in $\Sigma$, if $E_n \uparrow E$, then:
$\map \mu E = \ds \lim_{n \mathop \to \infty} \map \mu {E_n}$
where $E_n \uparrow E$ denotes limit of increasing sequence of sets.

Alternatively, and equivalently, $(3)$ may be replaced by either of:

$(3'):\quad$ For every decreasing sequence $\sequence {E_n}_{n \mathop \in \N}$ in $\Sigma$ for which $\map \mu {E_1}$ is finite, if $E_n \downarrow E$, then:
$\map \mu E = \ds \lim_{n \mathop \to \infty} \map \mu {E_n}$
$(3):\quad$ For every decreasing sequence $\sequence {E_n}_{n \mathop \in \N}$ in $\Sigma$ for which $\map \mu {E_1}$ is finite, if $E_n \downarrow \O$, then:
$\ds \lim_{n \mathop \to \infty} \map \mu {E_n} = 0$
where $E_n \downarrow E$ denotes limit of decreasing sequence of sets.


Proof
Necessary Condition
To show is that a measure $\mu$ has the properties $(1)$, $(2)$, $(3)$, $(3')$ and $(3)$.

Property $(1)$ is also part of the definition of measure, and hence is immediate.
Property $(2)$ is precisely the statement of Measure is Finitely Additive Function.
Property $(3)$ is precisely the statement of Measure of Limit of Increasing Sequence of Measurable Sets.

For $(3)$, note that it is a special case of $(3')$.
For property $(3')$, let $\sequence {E_n}_{n \mathop \in \N} \downarrow E$ be a decreasing sequence in $\Sigma$.
Suppose that $\map \mu {E_1} < +\infty$.
By Measure is Monotone, this implies:

$\forall n \in \N: \map \mu {E_n} < +\infty$
and also:

$\map \mu E < +\infty$

Now define:

$\forall n \in \N: F_n := E_1 \setminus E_n$
Then:

$F_n \uparrow E_1 \setminus E$

This article, or a section of it, needs explaining.In particular: prove this claimYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Hence, property $(3)$ can be applied as follows:














\(\ds \map \mu {E_1} - \map \mu E\)

\(=\)







\(\ds \map \mu {E_1 \setminus E}\)





Measure of Set Difference with Subset














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map \mu {E_1 \setminus E_n}\)





by property $(3)$














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \paren {\map \mu {E_1} - \map \mu {E_n} }\)





Measure of Set Difference with Subset














\(\ds \)

\(=\)







\(\ds \map \mu {E_1} - \lim_{n \mathop \to \infty} \map \mu {E_n}\)









Here, all expressions involving subtraction are well-defined as $\mu$ takes finite values.
It follows that:

$\ds \map \mu E = \lim_{n \mathop \to \infty} \map \mu {E_n}$
as required.
$\Box$


Sufficient Condition
The mapping $\mu$ is already satisfying axiom $(1)$ for a measure by the imposition on its codomain.
Also, axiom $(3')$ is identical to assumption $(1)$.
It remains to check axiom $(2)$.

So let $\sequence {E_n}_{n \mathop \in \N}$ be a sequence of pairwise disjoint sets in $\Sigma$.
Define, for $n \in \N$:

$F_n = \ds \bigcup_{k \mathop = 1}^n E_k$
Then:

$\forall n \in \N: F_n \subseteq F_{n + 1}$
Also, by Additive Function is Strongly Additive:

$\ds \forall n \in \N: \map \mu {F_n} = \map \mu {\bigcup_{k \mathop = 1}^n E_k} = \sum_{k \mathop = 1}^n \map \mu {E_k}$
Hence, using condition $(3)$ on the $F_n$, obtain:














\(\ds \map \mu {\bigcup_{n \mathop \in \N} E_n}\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map \mu {F_n}\)





Condition $(3)$














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \sum_{k \mathop = 1}^n \map \mu {E_k}\)





by the reasoning above














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^\infty \map \mu {E_k}\)





Definition of Series



This establishes that $\mu$ also satisfies axiom $(2)$ for a measure, and so it is a measure.

Now to show that $(3')$ and $(3)$ can validly replace $(3)$.
As $(3')$ clearly implies $(3)$ (which is a special case of the former), it will suffice to show that $(3)$ implies $(3)$.


This needs considerable tedious hard slog to complete it.In particular: this really isn't hard (use set difference and finiteness on decreasing sequence $G_n := \bigcup_{k \mathop \in \N} E_k \setminus F_n \downarrow \O$) but I can't formulate it nicely; the case where left hand side, right hand side are infinite for axiom $(2)$ has to be covered. Feel free to finish it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $4.4$




