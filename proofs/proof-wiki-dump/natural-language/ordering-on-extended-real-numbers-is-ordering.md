# 

Source: https://proofwiki.org/wiki/Ordering_on_Extended_Real_Numbers_is_Ordering



Theorem
Denote with $\le$ the usual ordering on the extended real numbers $\overline \R$.

Then $\le$ is an ordering, and so $\overline \R$ is an ordered set.


Proof
Transitive
Let $a, b, c \in \overline \R$.
Suppose that $a \le b$ and $b \le c$.
If $c = +\infty$, then by the definition of $\le$, $a \le c$.
If $b = +\infty$, then by Positive Infinity is Maximal, $b = c$, so $a \le c$.
If $a = +\infty$, then applying Positive Infinity is Maximal twice yields $a \le c$.
The cases for $a$, $b$, or $c$ being $-\infty$ are similar.
The only remaining case is that $a, b, c \in \R$.
Since $\le$ is transitive on $\R$, $a \le c$.
$\Box$


Antisymmetric
Let $a, b \in \overline{\R}$.
Suppose that $a \le b$ and $b \le a$.
If $a \in \R$ and $b \in \R$, then since $\le$ is antisymmetric on $\R$, $a = b$.
If $a = +\infty$, then since $a \le b$ and Positive Infinity is Maximal, $b = +\infty$.
Thus $a = b$.
If $a = -\infty$, then since $b \le a$ and Negative Infinity is Minimal, $b = -\infty$.
Similarly $b = +\infty \implies a = +\infty$ and $b = -\infty \implies a = -\infty$.
$\Box$


Reflexive
Let $a \in \overline \R$.
If $a \in \R$, then since $\le$ is reflexive on $\R$, $a \le a$.
If $a = +\infty$, then since $\tuple {+\infty, +\infty} \in \set {\tuple {x, +\infty}: x \in \overline \R}$, $a \le a$.
Similarly, if $a = -\infty$, then $a \le a$.
$\blacksquare$





