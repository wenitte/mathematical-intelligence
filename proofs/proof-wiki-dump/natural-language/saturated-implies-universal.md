# 

Source: https://proofwiki.org/wiki/Saturated_Implies_Universal

Theorem
Let $\kappa$ be an infinite cardinal.
Let $\MM$ be a model of the $\LL$-theory $T$.

If $\MM$ is $\kappa$-saturated, then it is $\kappa^+$-universal, where $\kappa^+$ is the successor cardinal of $\kappa$.


Proof
The idea of the proof is that $\MM$ being saturated means that when we want to define an elementary map $\NN \to \MM$, we can find an image $y \in \MM$ for an element $x \in \NN$ by realizing the type made up of the formulas that such a $y$ would need to satisfy.

Let $\NN$ be a model of $T$ with universe of cardinality strictly less than $\kappa$.
We will construct an elementary embedding of $\NN$ into $\MM$ by transfinite recursion.

Since $\card \NN < \kappa$, we can write its elements as $n_\alpha$ for ordinals $\alpha < \kappa$.
For each ordinal $\alpha < \kappa$, let $A_\alpha$ be the subset $\set {n_\beta: \beta < \alpha}$ of the universe of $\NN$.
Note for clarity that $n_\alpha \in A_{\alpha + 1}$ but $n_\alpha \notin A_\alpha$.


Base case $\alpha = 0$:
Define $f_0 = \O$.
Note that $f_0$ is trivially an elementary embedding from $A_0 = \O$ into $\MM$.


Limit ordinals $\alpha$, assuming $f_\beta$ is defined and elementary $A_\beta \to \MM$ for all $\beta < \alpha$:
Let $\ds f_\alpha = \bigcup_{\beta \mathop < \alpha} f_\beta$.
If $\phi$ is an $\LL$-sentence with parameters from $A_\alpha$, then since it involves only finitely many such parameters, they must all be contained in some $A_\beta$ for $\beta < \alpha$.  But $f_\alpha \restriction A_\beta = f_\beta$ is elementary, so $f_\alpha$ must be as well.


Successor ordinals $\alpha = \beta + 1$, assuming $f_\beta$ is defined and elementary $A_\beta \to \MM$:
We need to extend $f_\beta$ to $A_\alpha = A_\beta \cup \set {n_\beta}$ so that truth of $\LL$-sentences with parameters from $A_\alpha$ is preserved.
Consider the subset $p = \set {\map \phi {v, \map {f_\beta} {\bar{a} } }: \bar{a} \text{ is a tuple from } A_\beta \text{ and } \NN \models \map \phi {n_\beta, \bar{a} } }$ of the set of $\LL$-formulas with one free variable and parameters from the image $\map {f_\beta} {A_\beta}$ of $A_\beta$ under $f_\beta$.
The set $p$ is a $1$-type over the image $\map {f_\beta} {A_\beta}$ in $\MM$.
Since $\card {A_\beta} < \kappa$ and by assumption $\MM$ is $\kappa$-saturated, this means that $p$ is realized in $\MM$ by some element $b$.
Thus, defining $f_\alpha$ to be $f_\beta \cup \set {(n_\beta, b)}$ makes it an elementary embedding $A_\alpha \to \MM$.

Now, define $\ds f = \bigcup_{\alpha \mathop < \kappa} f_\alpha$.
Then $f$ is an elementary embedding from $\NN$ to $\MM$ since $\ds \bigcup_{\alpha \mathop < \kappa} A_\alpha = \NN$, any finite set of parameters from $\NN$ must belong to one $A_\alpha$, and $f \restriction A_\alpha = f_\alpha$ is elementary.

$\blacksquare$


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.




