# 

Source: https://proofwiki.org/wiki/Cantor-Bernstein-Schr%C3%B6der_Theorem

  This article was Featured Proof between 14 September 2008 and 22 September 2008.




Theorem
If a subset of one set is equivalent to the other, and a subset of the other is equivalent to the first, then the two sets are themselves equivalent:

$\forall S, T: T \sim S_1 \subseteq S \land S \sim T_1 \subseteq T \implies S \sim T$

Alternatively, from Equivalence of Definitions of Dominate (Set Theory), this can be expressed as:

$\forall S, T: T \preccurlyeq S \land S \preccurlyeq T \implies S \sim T$
where $T \preccurlyeq S$ denotes the fact that $S$ dominates $T$.

That is:

If $\exists f: S \to T$ and $\exists g: T \to S$ where $f$ and $g$ are both injections, then there exists a bijection from $S$ to $T$.


Proof Strategy
This theorem states in set theoretical concepts the "intuitively obvious" fact that if $a \le b$ and $b \le a$ then $a = b$.
Care needs to be taken to make well sure of this, because when considering infinite sets, intuition is frequently misleading.
In order to prove equivalence, a bijection needs to be demonstrated.
It can be significantly simpler to demonstrate an injection than a surjection.
So, proving that there is an injection from $S$ to $T$ and also one from $T$ to $S$ may be a lot less work than proving that there is both an injection and a surjection from $S$ to $T$.


Proof 1
From the facts that $T \sim S_1$ and $S \sim T_1$, we can set up the two bijections:

$f: S \to T_1$
$g: T \to S_1$

Let:

$S_2 = g \sqbrk {f \sqbrk S} = g \sqbrk {T_1} \subseteq S_1$
and:

$T_2 = f \sqbrk {g \sqbrk T} = f \sqbrk {S_1} \subseteq T_1$

So $S_2 \subseteq S_1$ and $S_2 \sim S$, while $T_2 \subseteq T_1$, and $T_2 \sim T$.
For each natural number $k$, let $S_{k + 2} \subseteq S$ be the image of $S_k$ under the mapping $g \circ f$.


This article, or a section of it, needs explaining.In particular: Why do these superset relations hold?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Then:

$S \supseteq S_1 \supseteq S_2 \supseteq \ldots \supseteq S_k \supseteq S_{k + 1} \ldots$

Let $\ds D = \bigcap_{k \mathop = 1}^\infty S_k$.


This article, or a section of it, needs explaining.In particular: Why can we represent it so?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Now we can represent $S$ as:




\(\text {(1)}: \quad\)









\(\ds S\)

\(=\)







\(\ds \paren {S \setminus S_1} \cup \paren {S_1 \setminus S_2} \cup \ldots \cup \paren {S_k \setminus S_{k + 1} } \cup \ldots \cup D\)









where $S \setminus S_1$ denotes set difference.



This article, or a section of it, needs explaining.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Similarly, we can represent $S_1$ as:




\(\text {(2)}: \quad\)









\(\ds S_1\)

\(=\)







\(\ds \paren {S_1 \setminus S_2} \cup \paren {S_2 \setminus S_3} \cup \ldots \cup \paren {S_k \setminus S_{k + 1} } \cup \ldots \cup D\)










Now let:














\(\ds M\)

\(=\)







\(\ds \paren {S_1 \setminus S_2} \cup \paren {S_3 \setminus S_4} \cup \paren {S_5 \setminus S_6} \cup \ldots\)




















\(\ds N\)

\(=\)







\(\ds \paren {S \setminus S_1} \cup \paren {S_2 \setminus S_3} \cup \paren {S_4 \setminus S_5} \cup \ldots\)




















\(\ds N_1\)

\(=\)







\(\ds \paren {S_2 \setminus S_3} \cup \paren {S_4 \setminus S_5} \cup \paren {S_6 \setminus S_7} \cup \ldots\)










and rewrite $(1)$ and $(2)$ as:




\(\text {(3)}: \quad\)









\(\ds S\)

\(=\)







\(\ds D \cup M \cup N\)










\(\text {(4)}: \quad\)









\(\ds S_1\)

\(=\)







\(\ds D \cup M \cup N_1\)










Now:














\(\ds g \circ f \sqbrk {S \setminus S_1} = \paren {S_2 \setminus S_3}\)

\(\leadsto\)







\(\ds \paren {S \setminus S_1} \sim \paren {S_2 \setminus S_3}\)




















\(\ds g \circ f \sqbrk {S_2 \setminus S_3} = \paren {S_4 \setminus S_5}\)

\(\leadsto\)







\(\ds \paren {S_2 \setminus S_3} \sim \paren {S_4 \setminus S_5}\)










This article contains statements that are justified by handwavery.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
and so on.
So $N \sim N_1$.

It follows from $(3)$ and $(4)$ that a bijection can be set up between $S$ and $S_1$.
But $S_1 \sim T$.
Therefore $S \sim T$.
$\blacksquare$


Proof 2
Suppose $S \preccurlyeq T$ and $T \preccurlyeq S$.
By definition, we have that there exist injections $f: S \to T$ and $g: T \to S$.
We are going to try to build a sequence $t_1, s_1, t_2, s_2, t_3 \ldots$ as follows.

Consider any $t_1 \in T$.
By Law of Excluded Middle there are two choices:










\(\ds \exists s_1 \in S: \, \)



\(\ds \map f {s_1}\)

\(=\)







\(\ds t_1\)
















\(\ds \nexists s_1 \in S: \, \)



\(\ds \map f {s_1}\)

\(=\)







\(\ds t_1\)










Suppose $\exists s_1 \in S: \map f {s_1} = t_1$.
Because $f$ is injective, such an $s_1$ is unique.
So we can choose $s_1 = \map{f^{-1} } {t_1}$.

Again, by Law of Excluded Middle there are two further choices:










\(\ds \exists t_2 \in T: \, \)



\(\ds \map g {t_2}\)

\(=\)







\(\ds s_1\)
















\(\ds \nexists t_2 \in T: \, \)



\(\ds \map g {t_2}\)

\(=\)







\(\ds s_1\)










Suppose $\exists t_2 \in T: \map g {t_2} = s_1$.
Because $f$ is injective, such an $t_2$ is unique.

Similarly, we choose $s_2 = \map {f^{-1} } {t_2}$, if it exists.

This process goes on until one of the following happens:

We reach some $s_n \in S$ such that $\nexists t \in T: \map g t = s_n$. This may be possible because $g$ may not be a surjection.
We reach some $t_n \in T$ such that $\nexists s \in S: \map f s = t_n$.This may be possible because $f$ may not be a surjection.
The process goes on for ever.

For each $t \in T$, then, there is a well-defined process which turns out in one of the above three ways.
We partition $T$ up into three subsets that are mutually disjoint:

Let $T_A = \set {\text {all $t \in T$ such that the process ends with some $s_n$} }$
Let $T_B = \set {\text {all $t \in T$ such that the process ends with some $t_n$} }$
Let $T_C = \set {\text {all $t \in T$ such that the process goes on for ever} }$

We can do exactly the same thing with the elements of $S$:

Let $S_A = \set {\text {all $s \in S$ such that the process ends with some $s_n$} }$
Let $S_B = \set {\text {all $s \in S$ such that the process ends with some $t_n$} }$
Let $S_C = \set {\text {all $s \in S$ such that the process goes on for ever} }$

What we need to do is show that $S \sim T$.
We do this by showing that $S_A \sim T_A$, $S_B \sim T_B$ and $S_C \sim T_C$.

The restriction of $f$ to $S_A$ is a bijection from $S_A$ to $T_A$.
To do this we need to show that:

$(1): \quad s \in S_A \implies \map f s \in T_A$;
$(2): \quad \forall t \in T_A: \exists s \in S_A: \map f s = t$.

Let $s \in S_A$.
Then the process applied to $s$ ends in $S$.

Now consider the process applied to $\map f s$.
Its first step leads us back to $s$.
Then it continues the process, applied to $s$, and ends up in $S$.
Thus $\map f s \in T_A$.
Thus $s \in S_A \implies \map f s \in T_A$.

Now suppose $t \in T_A$.
Then the process applied to $t$ ends in $S$.
In particular, it must have a first stage, otherwise it would end in $T$ with $t$ itself.
Hence $t = \map f s$ for some $s$.
But the process applied to this $s$ is the same as the continuation of the process applied to $t$, and therefore it ends in $S$.
Thus $s \in S_A$ as required.

Hence the restriction of $f$ to $S_A$ is a bijection from $S_A$ to $T_A$.

We can use the same argument to show that $g: T_B \to S_B$ is also a bijection.
Hence $g^{-1}: S_B \to T_B$ is a bijection.

Finally, suppose $t \in T_C$.
Because $f$ is an injection, $t = \map f s$ for some $s$, and the process applied to $t$ must start.
This $s$ must belong to $S_C$, because the process starting from $s$ is the same as the process starting from $t$ after the first step.
This never ends, as $t \in T_C$.

Now we can define a bijection $h: S \to T$ as follows:

$\map h x = \begin {cases}
\map f s: x \in S_A \\
\map f s: x \in S_C \\
\map {g^{-1} } x: x \in S_B \end {cases}$
The fact that $h$ is a bijection follows from the facts that:

$(1): \quad S_A$, $S_B$ and $S_C$ are mutually disjoint
$(2): \quad T_A$, $T_B$ and $T_C$ are mutually disjoint
$(3): \quad f$, $f$ and $g^{-1}$ are the bijections which respectively do the mappings between them.
$\blacksquare$


Proof 3
Let $S, T$ be sets.
Let $\powerset S, \powerset T$ denote their power sets.
Let $f: S \to T$ and $g: T \to S$ be injections that we know to exist between $S$ and $T$.

Consider the relative complements of elements of $\powerset S$ and $\powerset T$ as mappings:

$\complement_S: \powerset S \to \powerset S: \forall X \in \powerset S: \relcomp S X = S \setminus X$
$\complement_T: \powerset T \to \powerset T: \forall Y \in \powerset T: \relcomp T Y = T \setminus Y$
which follow directly from the definition of relative complement.
Let $\alpha$ and $\beta$ denote the direct image mappings of $f$ and $g$, respectively.

Consider the mapping $z: \powerset S \to \powerset S$ defined by the composition:

$z = \complement_S \circ \beta \circ \complement_T \circ \alpha$


$z$ is an increasing mapping
Let $A, B \in \powerset S$ with $A \subseteq B$.
We have:














\(\ds \map \alpha A\)

\(\subseteq\)







\(\ds \map \alpha B\)





Image of Subset under Mapping is Subset of Image








\(\ds \leadsto \ \ \)





\(\ds \map {\paren {\complement_T \circ \alpha} } A\)

\(\supseteq\)







\(\ds \map {\paren {\complement_T \circ \alpha} } B\)





Set Complement inverts Subsets








\(\ds \leadsto \ \ \)





\(\ds \map {\paren {\beta \circ \complement_T \circ \alpha} } A\)

\(\supseteq\)







\(\ds \map {\paren {\beta \circ \complement_T \circ \alpha} } B\)





Image of Subset under Mapping is Subset of Image








\(\ds \leadsto \ \ \)





\(\ds \map {\paren {\complement_S \circ \beta \circ \complement_T \circ \alpha} } A\)

\(\subseteq\)







\(\ds \map {\paren {\complement_S \circ \beta \circ \complement_T \circ \alpha} } B\)





Set Complement inverts Subsets








\(\ds \leadsto \ \ \)





\(\ds \map z A\)

\(\subseteq\)







\(\ds \map z B\)





Definition of $z$



$\Box$
By the Knaster-Tarski Lemma: Power Set, there is a $\mathbb G \in \powerset S$ such that:

$\map z {\mathbb G} = \mathbb G$

From Relative Complement of Relative Complement we have that $\complement_S \circ \complement_S$ is the identity mapping on $\powerset S$.
Thus we obtain:














\(\ds \relcomp S {\mathbb G}\)

\(=\)







\(\ds \map {\paren {\complement_S \circ z} } {\mathbb G}\)




















\(\ds \)

\(=\)







\(\ds \map {\paren {\complement_S \circ \complement_S \circ \beta \circ \complement_T \circ \alpha} } {\mathbb G}\)





Definition of $z$














\(\ds \)

\(=\)







\(\ds g \sqbrk {\map {\paren {\complement_T \circ \alpha} } {\mathbb G} }\)





as $\complement_S \circ \complement_S = I_{\powerset S}$




At this stage, a diagram can be helpful:



Let $h: S \to T$ be the mapping defined as:

$\forall x \in S: \map h x = \begin {cases}
\map f x & : x \in \mathbb G \\
\map {g^{-1} } x & : x \in \relcomp S {\mathbb G}
\end {cases}$
From the above, we have that:

$\relcomp S {\mathbb G} \subseteq g \sqbrk T$
Therefore, as $g$ is an injection, it follows that the preimage $\map {g^{-1} } x$ is a singleton.
So $h$ is a bijection by dint of the injective nature of both $f$ and $g^{-1}$.
$\blacksquare$


Proof 4
From the facts that $T \sim S_1$ and $S \sim T_1$, we can set up the two injections:

$f \sqbrk S = T_1 \subseteq T$
$g \sqbrk T = S_1 \subseteq S$

Using $f$ and $g$, $S$ and $T$ are divided into disjoint subsets such that there exists a bijection between the subsets of $S$ and those of $T$, as follows.

Let $a \in S$.
Then we define the elements of $S$:

$\ldots, a_{-2 n}, \ldots, a_{-2}, a_0, a_2, \ldots, a_{2 n}, \ldots$
and the elements of $T$:

$\ldots, a_{-2 n + 1}, \ldots, a_{-1}, a_1, \ldots, a_{2 n - 1}, \ldots$
recursively as follows:

Let:














\(\ds a_0\)

\(=\)







\(\ds a\)




















\(\ds a_1\)

\(=\)







\(\ds \map f {a_0}\)




















\(\ds a_2\)

\(=\)







\(\ds \map g {a_1}\)




















\(\ds \)

\(\vdots\)







\(\ds \)




















\(\ds a_{2 n - 1}\)

\(=\)







\(\ds \map f {a_{2 n - 2} }\)




















\(\ds a_{2 n}\)

\(=\)







\(\ds \map g {a_{2 n - 1} }\)




















\(\ds \)

\(\vdots\)







\(\ds \)









This construction is valid for all $n \ge 1$, but note that some of the $a_n$'s may coincide with others.
We set up a similar construction for negative integers:














\(\ds a_{-1}\)

\(=\)







\(\ds \map {g^{-1} } {a_0}\)





if such an element exists in $T$














\(\ds a_{-2}\)

\(=\)







\(\ds \map {f^{-1} } {a_{-1} }\)





if such an element exists in $S$














\(\ds \)

\(\vdots\)







\(\ds \)




















\(\ds a_{-2 n + 1}\)

\(=\)







\(\ds \map {g^{-1} } {a_{-2 n + 2} }\)





if such an element exists in $T$














\(\ds a_{2 n}\)

\(=\)







\(\ds \map {f^{-1} } {a_{-2 n + 1} }\)





if such an element exists in $S$














\(\ds \)

\(\vdots\)







\(\ds \)









As $f$ and $g$ are injections, it follows that if $\map {f^{-1} } x$ and $\map {g^{-1} } y$ exist for any $x \in T$, $y \in S$, then those elements are unique.

Let:

the elements of $S$ with an even index be denoted $\sqbrk a_S$
and

the elements of $T$ with an odd index be denoted $\sqbrk a_T$
that is:














\(\ds \sqbrk a_S\)

\(=\)







\(\ds \set {\ldots, a_{-2 n}, \ldots, a_{-2}, a_0, a_2, \ldots, a_{2 n}, \ldots} \subseteq S\)




















\(\ds \sqbrk a_T\)

\(=\)







\(\ds \set {\ldots, a_{-2 n + 1}, \ldots, a_{-1}, a_1, \ldots, a_{2 n - 1}, \ldots} \subseteq T\)










We are given that $f$ and $g$ are injections.
So by the definition of $\sqbrk a_S$, for any two $a, b \in S$, $\sqbrk a_S$ and $\sqbrk b_S$ are either disjoint or equal.
The same applies to $\sqbrk a_T$ and $\sqbrk b_T$ for any $a, b \in T$.
It follows that:

$\AA_S = \set {\sqbrk a_S: a \in S}$ is a partition of $S$
and 

$\AA_T = \set {\sqbrk a_T: a \in S}$ is a partition of $T$.
So:

every element of $S$ belongs to exactly one element of $\AA_S$
and:

every element of $T$ belongs to exactly one element of $\AA_T$.
So let $a \in S$ and $b \in T$ such that $\map f a = b$.
It follows that a bijection can be constructed from $\AA_S$ to $\AA_T$.

Now there are two different kinds of $\sqbrk a_S$ sets:

$(1):$ It is possible that no repetition occurs in the sequence $\sequence {a_{2 n} }$.
As a consequence, no repetition occurs in the sequence $\sequence {a_{2 n - 1} }$ either.
By the method of construction it can be seen that $\sqbrk a_S$ and $\sqbrk a_T$ are both countably infinite.
So a bijection can be constructed between $\sqbrk a_S$ and $\sqbrk a_T$.


$(2):$ There may be a repetition in $\sqbrk a_S$.
Suppose such a repetition is $a_{2 m} = a_{2 n}$ for some $m \ne n$.
Then $a_{2 m + 1} = a_{2 n + 1}$ and $a_{2 m + 2} = a_{2 n + 2}$ and so on.
In general $a_{2 m + k} = a_{2 n + k}$ for all $k \in \N$.
But because $f$ and $g$ are injections it follows that $a_{2 m - 1} = a_{2 n - 1}$ and $a_{2 m - 2} = a_{2 n - 2}$ and so on, where they exist.
So in general $a_{2 m - k} = a_{2 n - k}$ for all $k \in \N$, where they exist.
Given $m$, we can choose $n$ so that the elements $a_{2 m}, a_{2 m + 2}, \ldots, a_{2 n - 2}$ are distinct.
Then $a_{2 m + 1}, a_{2 m + 3}, \ldots, a_{2 n - 1}$ are likewise distinct elements of $T$.
Thus we can set up a bijection:

$a_{2 m} \mapsto a_{2 m + 1}, a_{2 m + 2} \mapsto a_{2 m + 3}, \ldots, a_{2 n - 2} \mapsto a_{2 n - 1}$
between the elements of $\sqbrk a_S$ and $\sqbrk a_T$.

It follows that a bijection can be constructed between any two elements of the partitions of $S$ and $T$.
These maps then automatically yield a bijection from $S$ to $T$.
Hence the result.
$\blacksquare$


Proof 5
By Injection to Image is Bijection:

$g: T \to g \sqbrk T$ is a bijection.
Thus $T$ is equivalent to $g \sqbrk T$.
By Composite of Injections is Injection $g \circ f: S \to g \sqbrk T \subset S$ is also an injection (to a subset of the domain of $g \circ f$).
Then by Cantor-Bernstein-Schröder Theorem: Lemma:

There exists a bijection $h: S \to g \sqbrk T$.
Thus $S$ is equivalent to $g \sqbrk T$.
We already know that $T$ is equivalent to $g \sqbrk T$.
Thus by Set Equivalence behaves like Equivalence Relation, $S$ is equivalent to $T$.
By the definition of set equivalence:

There is a bijection $\phi: S \to T$.
$\blacksquare$


Proof 6
Let $\powerset A$ be the power set of $A$.
Define a mapping $E: \powerset A \to \powerset A$ thus:

$\map E S = A \setminus g \sqbrk {B \setminus f \sqbrk S}$


$E$ is increasing
Let $S, T \in \powerset A$ such that $S \subseteq T$.
Then:














\(\ds f \sqbrk S\)

\(\subseteq\)







\(\ds f \sqbrk T\)





Image of Subset is Subset of Image








\(\ds \leadsto \ \ \)





\(\ds B \setminus f \sqbrk T\)

\(\subseteq\)







\(\ds B \setminus f \sqbrk S\)





Set Difference with Subset is Superset of Set Difference








\(\ds \leadsto \ \ \)





\(\ds g \sqbrk {B \setminus f \sqbrk T}\)

\(\subseteq\)







\(\ds g \sqbrk {B \setminus f \sqbrk S}\)





Image of Subset is Subset of Image








\(\ds \leadsto \ \ \)





\(\ds A \setminus g \sqbrk {B \setminus f \sqbrk S}\)

\(\subseteq\)







\(\ds A \setminus g \sqbrk {B \setminus f \sqbrk T}\)





Set Difference with Subset is Superset of Set Difference



That is, $\map E S \subseteq \map E T$.
$\Box$
By the Knaster-Tarski Lemma, $E$ has a fixed point $X$.
By the definition of fixed point:

$\map E X = X$
Thus by the definition of $E$:

$A \setminus g \sqbrk {B \setminus f \sqbrk X} = X$
Therefore:

$(1): \quad A \setminus \paren {A \setminus g \sqbrk {B \setminus f \sqbrk X} } = A \setminus X$
Since $g$ is a mapping into $A$:

$g \sqbrk {B \setminus f \sqbrk X} \subseteq A$
Thus by Relative Complement of Relative Complement:

$A \setminus \paren {A \setminus g \sqbrk {B \setminus f \sqbrk X} } = g \sqbrk {B \setminus f \sqbrk X}$
Thus by $(1)$:

$g \sqbrk {B \setminus f \sqbrk X} = A \setminus X$
Let $f' = f \restriction_{X \times f \sqbrk X}$ be the restriction of $f$ to $X \times f \sqbrk X$.
Similarly, let $g' = g \restriction_{\paren {B \setminus f \sqbrk X} \times \paren {A \setminus X} } = g \restriction_{\paren {B \setminus f \sqbrk X} \times g \sqbrk {B \setminus f \sqbrk X} }$.
By Injection to Image is Bijection, $f'$ and $g'$ are both bijections.
Define a relation $h: A \to B$ by $h = f' \cup {g'}^{-1}$.
We will show that $h$ is a bijection from $A$ onto $B$.
The domain of $f'$ is $X$, which is disjoint from the codomain, $A \setminus X$, of $g'$.
The domain of $g'$ is $B \setminus f \sqbrk X$, which is disjoint from the codomain, $f \sqbrk X$, of $f'$.
Let $h = f' \cup {g'}^{-1}$.
By the corollary to Union of Bijections with Disjoint Domains and Codomains is Bijection:

$h$ is a bijection from $X \cup \paren {A \setminus X}$ onto $f \sqbrk X \cup \paren {B \setminus f \sqbrk X}$.
By Union with Relative Complement, $h$ is a bijection from $A$ onto $B$.
Since $f' \subseteq f$ and $g' \subseteq g$, each element of $h$ is an element of $f$ or of $g^{-1}$.
That is, if $y = \map h x$ then either $y = \map f x$ or $x = \map g y$.
$\blacksquare$


Law of the Excluded Middle
This theorem depends on the Law of the Excluded Middle.
This is one of the logical axioms that was determined by Aristotle, and forms part of the backbone of classical (Aristotelian) logic.
However, the intuitionist school rejects the Law of the Excluded Middle as a valid logical axiom.
This in turn invalidates this theorem from an intuitionistic perspective.


Also known as
The Cantor-Bernstein-Schröder Theorem is also known as:

The Cantor-Bernstein Theorem
The Cantor-Schroeder-Bernstein Theorem or Cantor-Schröder-Bernstein Theorem
The Schroeder-Bernstein Theorem or Schröder-Bernstein Theorem.


Source of Name
This entry was named for Georg Cantor, Felix Bernstein and Friedrich Wilhelm Karl Ernst Schröder.


Historical Note
Cantor raised the Cantor-Bernstein-Schröder Theorem as a conjecture in $1895$.
He first attempted to prove it in his $1897$ paper.
Ernst Schröder also stated this theorem in $1896$, but his proof, as well as Cantor's, was flawed.
It was Felix Bernstein who finally supplied a correct proof in his $1898$ Ph.D. thesis.


Sources
1968: A.N. Kolmogorov and S.V. Fomin‎: Introductory Real Analysis: $\S 2.6$: Theorem $7$
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 10.03$
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 8$: Theorem $8.2$: Corollary
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Schröder-Bernstein theorem (Cantor-Bernstein theorem)
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $2.7$
2008: Paul Halmos and Steven Givant: Introduction to Boolean Algebras ... (previous) ... (next): Appendix $\text{A}$: Set Theory: Cardinality
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Schröder-Bernstein theorem (Cantor-Bernstein theorem)
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $1$: General Background: $\S 4$ Larger and smaller




