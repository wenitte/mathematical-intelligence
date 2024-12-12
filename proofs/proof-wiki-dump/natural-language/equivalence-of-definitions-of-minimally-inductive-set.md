# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Minimally_Inductive_Set



Theorem
The following definitions of the concept of Minimally Inductive Set are equivalent:

Definition 1
Let $S$ be an inductive set.
The minimally inductive set $\omega$ is the inductive set given by:

$\ds \omega := \bigcap \set {S' \subseteq S: S' \text{ is an inductive set} }$
that is, $\omega$ is the intersection of every inductive set which is a subset of $S$.

Definition 2
The minimally inductive set $\omega$ is defined as the set of all finite ordinals:

$\omega := \set {\alpha: \alpha \text{ is a finite ordinal} }$
Definition 3
The minimally inductive set $\omega$ is defined as:

$\omega := \set {x \in \On: \paren {x \cup \set x} \subseteq K_I}$
where:

$K_I$ is the class of all non-limit ordinals
$\On$ is the class of all ordinals.


Proof
Definition $1$ equals Definition $2$
We will prove that both definitions of $\omega$ specify the same set.

Firstly, let us show that $\omega$ as given in Definition 2 is an inductive set.
It is immediate from the definition of a finite ordinal that $\O$ is one.
Also, if $\beta$ is a finite ordinal, so is $\beta^+$.
Therefore:

$\omega = \set {\alpha: \alpha \text{ is a finite ordinal} }$
is an inductive set.
Next, apply Definition 1 to this $\omega$, yielding the set:

$\ds \bigcap \set {S \subseteq \omega: S \text{ is an inductive set} }$

Conversely, suppose that $S \subseteq \omega$ is an inductive set.
Suppose that $S \ne \omega$.
Then their difference $\omega \setminus S$ is non-empty.
By Intersection of Ordinals is Smallest:

$\ds \alpha := \bigcap \omega \setminus S$
is the smallest element in $\omega \setminus S$.

Then $\alpha \ne \O$, since $\O \in S$ by definition of an inductive set.
So $\alpha = \beta^+$ for some $\beta \in \omega$.
Since $\alpha$ was the smallest element of $\omega \setminus S$, it follows from Ordinal is Less than Successor that:

$\beta \notin \omega \setminus S$
that, is, $\beta \in S$.
But since $S$ is an inductive set, this means that:

$\beta^+ = \alpha \in S$
which is a contradiction.

It follows that $S = \omega$.
Therefore, we conclude that:

$\ds \bigcap \set {S \subseteq \omega: S \text{ is an inductive set} } = \omega$
establishing the equivalence of the definitions.
$\Box$


Definition 2 equals Definition 3
From Definition 2 and Definition 3, we see that we are to prove:

$\alpha$ is a finite ordinal if and only if $\alpha^+ \subseteq K_I$
where $\alpha^+$ is the successor ordinal of $\alpha$, and $K_I$ is the class of non-limit ordinals.

Suppose that $\alpha$ is a finite ordinal.
If $\alpha = \O$, then $\alpha^+ = \set \O$.
Since $\O$ is by definition a non-limit ordinal, it follows that:

$\alpha^+ \subseteq K_I$
Suppose now that $\alpha$ is the smallest finite ordinal such that:

$\alpha^+ \nsubseteq K_I$
Then since $\alpha \ne \O$, it must be that $\alpha = \beta^+$ for some finite ordinal $\beta$.
Moreover, since $\alpha$ was the smallest such ordinal, we then know that:

$\alpha = \beta^+ \subseteq K_I$
so that we are led to the conclusion that:

$\alpha \notin K_I$
However, this contradicts the fact that $\alpha$ is the successor ordinal of $\beta$.
Therefore, $\alpha$ cannot exist, and we conclude that:

$\alpha^+ \subseteq K_I$ for all finite ordinals $\alpha$.

Conversely, suppose that $\alpha^+ \subseteq K_I$.
Let $\beta \in \alpha^+$ be the smallest element of $\alpha^+$ that is not a finite ordinal, if it exists.
Then by assumption, $\beta \in K_I$, meaning that either $\beta = \O$ or $\beta = \gamma^+$ for some ordinal $\gamma$.
Since $\O$ is a finite ordinal, the former option is impossible.
Thus $\beta = \gamma^+$ for some finite ordinal $\gamma$, by construction of $\beta$ as the smallest element of $\alpha^+$ that is not a finite ordinal.
But then by definition, $\beta = \gamma^+$ is also a finite ordinal.

Therefore, $\beta$ cannot exist.
In particular, since $\alpha \in \alpha^+$, it follows that:

$\alpha^+ \subseteq K_I$ implies $\alpha$ is a finite ordinal.

Hence Definition 2 and Definition 3 are equivalent.
$\blacksquare$





