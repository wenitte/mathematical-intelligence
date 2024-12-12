# 

Source: https://proofwiki.org/wiki/Dedekind%27s_Theorem



Theorem
Let $\tuple {L, R}$ be a Dedekind cut of the set of real numbers $\R$.

Then there exists a unique real number which is a producer of $\tuple {L, R}$.

Thus it is proved that the totally ordered set $\R$ is Dedekind complete, and that is why it is referred to as the continuum.


Corollary
Let $\tuple {L, R}$ be a Dedekind cut of the set of real numbers $\R$.

Then either $L$ contains a largest number or $R$ contains a smallest number.


Proof 1
Suppose $P$ and $Q$ are two properties which are mutually exclusive.
Suppose that one of either of $P$ and $Q$ are possessed by every $x \in \R$.
Suppose that any number having $P$ is less than any which have $Q$.
Let us call the numbers with $P$ the left hand set $L$, and the ones with $Q$ the right hand set $R$.
There are two possibilities, as follows.

$L$ has a greatest element, or
$R$ has a least element.
It is not possible that both of the above can happen.
Because suppose $l$ is the greatest element of $L$ and $r$ is the least element of $R$.
Then the number $\dfrac {l + r} 2$ is greater than $l$ and less than $r$, so it could not be in either class.
However, one of the above must occur.
Because, suppose the following.
Let $L_1$ and $R_1$ be the subsets of $L$ and $R$ respectively consisting of only the rational numbers in $L$ and $R$.
Then $L_1$ and $R_1$ form a section of the set of rational numbers $\Q$.
There are two cases to think about:
Maybe $L_1$ has a greatest element $\alpha$.
In this case, $\alpha$ must also be the greatest element of $L$.
Because if not, then there's a greater one, which we can call $\beta$.
There are always rational numbers between $\alpha$ and $\beta$ from Rational Numbers are Densely Ordered.
These are less than $\beta$ and thus belong to $L$ and (because they're rational) also to $L_1$.
This is a contradiction, so if $\alpha$ is the greatest element of $L_1$, it's also the greatest element of $L$.
On the other hand, $L_1$ may not have a greatest element.
In this case, the section of the rational numbers formed by $L_1$ and $R_1$ is a real number $\alpha$.


This article, or a section of it, needs explaining.In particular: Justify the above assertion.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
It must belong to either $L$ or $R$.
If it belongs to $L$ we can show, like we did before, that it is the greatest element of $L$.
Similarly, if it belongs to $R$ we can show it is the least element of $R$.

So in any case, either $L$ has a greatest element or $R$ has a least element.

Thus, any section of the real numbers corresponds to a real number.
$\blacksquare$


Proof 2
Proof of Uniqueness
Aiming for a contradiction, suppose both $\alpha$ and $\beta$ produce $\tuple {L, R}$.
By the Trichotomy Law for Real Numbers either $\beta < \alpha$ or $\alpha < \beta$.
Suppose that $\beta < \alpha$.
From Real Numbers are Densely Ordered, there exists at least one real number $c$ such that $\beta < c$ and $c < \alpha$.
Because $c < \alpha$, it must be the case that $c \in L$.
Because $\beta < c$, it must be the case that $c \in R$.
That is:

$c \in L \cap R$
But by the definition of Dedekind Cut, $\tuple {L, R}$ is a partition of $\R$.
That is, $L$ and $R$ are disjoint.
That is:

$L \cap R = \O$
This is a contradiction.
Similarly, $\alpha < \beta$ also leads to a contradiction.

It follows that $\alpha$ is unique.
$\Box$


Proof of Existence
Let $\alpha = \sup L$.
Let $u_1 \in \R$ such that $u_1 < \alpha$.
Aiming for a contradiction, suppose $u_1 \in R$.
Suppose there is no real number $s \in L$ such that $u_1 < s \le \alpha$.
Then $u_1$ would be an upper bound of $L$ which is less than $\sup {L}$.
This is a contradiction.
So there exists at least one real number $s \in L$ such that $u_1 < s \le \alpha$.
But this is also a contradiction because all the elements of $R$ are greater than all the elements of $L$.
It follows that $u_1 \in L$.

Let $u_2 \in \R$ such that $\alpha < u_2$.
Aiming for a contradiction, suppose $u_2 \in L$.
There exists $s' \in \R$ such that $\alpha < s' < u_2$.
But $s' \notin L$ and thus $s' \in R$.
This is a contradiction because all the elements of $R$ are greater than all the elements of $L$.
It follows that $u_2 \in R$.

Hence, $\alpha$ produces the cut $\tuple {L, R}$.
$\blacksquare$


Proof 3
Proof of Uniqueness
Aiming for a contradiction, suppose both $\alpha$ and $\beta$ produce $\tuple {L, R}$.
By the Trichotomy Law for Real Numbers either $\beta < \alpha$ or $\alpha < \beta$.
Suppose that $\beta < \alpha$.
From Real Numbers are Densely Ordered, there exists at least one real number $c$ such that $\beta < c$ and $c < \alpha$.
Because $c < \alpha$, it must be the case that $c \in L$.
Because $\beta < c$, it must be the case that $c \in R$.
That is:

$c \in L \cap R$
But by the definition of Dedekind Cut, $\tuple {L, R}$ is a partition of $\R$.
That is, $L$ and $R$ are disjoint.
That is:

$L \cap R = \O$
This is a contradiction.
Similarly, $\alpha < \beta$ also leads to a contradiction.

It follows that $\alpha$ is unique.
$\Box$


Proof of Existence
Let $\gamma$ be the set of all rational numbers $p$ such that $p \in \alpha$ for some $\alpha \in L$.
It is to be verified that $\gamma$ is a cut.

Because $L$ is not empty, neither is $\gamma$.
Suppose $\beta \in \R$ and $q \notin \beta$.
Then because $\alpha < \beta$, we have that $q \notin \alpha$ for any $\alpha \in L$.
Thus $q \notin \gamma$.
Thus $\gamma$ satisfies criterion $(1)$ for being a cut.

Suppose $p \in \gamma$ and $q < p$.
Then $p \in \alpha$ for some $\alpha \in L$.
Hence $q \in \alpha$.
Hence $q \in \gamma$.
Thus $\gamma$ satisfies criterion $(2)$ for being a cut.

Suppose $p \in \gamma$.
Then $p \in \alpha$ for some $\alpha \in L$.
Hence there exists $q > p$ such that $q \in \alpha$.
Hence $q \in \gamma$.
Thus $\gamma$ satisfies criterion $(3)$ for being a cut.

Thus, by definition of the real numbers by identifying them with cuts, $\gamma$ is a real number.

We have that:

$\alpha \le \gamma$
for all $\alpha \in L$.
Aiming for a contradiction, suppose there exists $\beta \in R$ such that $\beta < \gamma$.
Then there exists some rational number $p \in\ Q$ such that $p \in \gamma$ and $p \notin beta$.
But if $p \in \gamma$ then $p \in \alpha$ for some $\alpha\ in L$.
This implies that $\beta < \alpha$.
But this contradicts the definition of Dedekind cut:

$(3): \quad \forall x \in L: \forall y \in R: x < y$
Thus $\gamma \le \beta$ for all $\beta \in R$.

That is, $\gamma$ is a producer of $\tuple {L, R}$.
$\blacksquare$



This page has been identified as a candidate for refactoring of medium complexity.In particular: In view of the fact that the existence proof is the same for Proof 2 and Proof 3, it makes sense to separate the proof into subpages "existence" and "uniqueness" and multiplicate these, rather than the overall proof.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Also known as
Dedekind's Theorem is also known as the completeness theorem for the real numbers.


Also see
Axiom:Axiom of Continuity
Continuum Property


Source of Name
This entry was named for Julius Wilhelm Richard Dedekind.


Sources
1964: Walter Rudin: Principles of Mathematical Analysis (2nd ed.) ... (previous) ... (next): Chapter $1$: The Real and Complex Number Systems: Real Numbers: $1.32$. Theorem (Dedekind)




