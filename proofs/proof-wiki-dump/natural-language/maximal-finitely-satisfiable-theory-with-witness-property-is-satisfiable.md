# 

Source: https://proofwiki.org/wiki/Maximal_Finitely_Satisfiable_Theory_with_Witness_Property_is_Satisfiable



Theorem

This article needs to be tidied.In particular: If we are using the $\mathrm{PL}$ semantics, then only sentences exist in a theory. We can then show that $T$ is a theory in Finitely Satisfiable Set of Sentences has Maximal Finitely Satisfiable Extension, and make some of this reasoning a little simpler.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.
Let $\LL$ be a language of predicate logic.
Let $T$ be a set of $\LL$-sentences such that:

$T$ is finitely satisfiable
For every $\LL$-sentence $\phi$, either:
$\phi \in T$
or:
$\sqbrk {\neg \phi} \in T$
$T$ satisfies the witness property


Proof
Let $M$ be the set of all $\LL$-terms that contain no variables.
For each $n$-ary function $f$ in $\LL$, define:

$\map {F_f} {t_1, \dotsc, t_n} = \sqbrk {\map f {t_1, \dotsc, t_n}}$
For each $n$-ary predicate $p$ in $\LL$, define:

$\map {P_p} {t_1, \dotsc, t_n} = \begin{cases}
\top & : \sqbrk {\map p {t_1, \dotsc, t_n}} \in T \\
\bot & : \sqbrk {\map p {t_1, \dotsc, t_n}} \notin T
\end{cases}$

Define:

$\MM = \tuple {M, \set {F_f}, \set {P_p}}$
We will now show that:

$\MM \models_{\mathrm{PL}} T$
Specifically, we will prove that, for every $\LL$-sentence $\phi$:

$\phi \in T \iff \MM \models_{\mathrm{PL}} \phi$

First, it can be easily seen that, for every term $t$ containing no variables:

$\map {\operatorname{val}_\MM} t = t$
where $\operatorname{val}$ is the value of a term.

Let $\map P n$ be defined as:

For every $\LL$-sentence $\phi$ with $n$ quantifiers, $\phi \in T \iff \MM \models_{\mathrm{PL}} \phi$
We proceed by induction on $\map P n$.
The cases for $\map P 0$ and $\map P {k + 1}$ are very similar, except that one of our cases will not apply in the former, so we will prove them simultaneously.

Let $n \in \N$ be arbitrary.
Let $\map Q m$ be defined as:

For every $\LL$-sentence $\phi$ with $n$ quantifiers and $m$ logical connectives, $\phi \in T \iff \MM \models_{\mathrm{PL}} \phi$
Now, perform complete induction on $\map Q m$, using the alternate formulation:

$\forall m \in \N, \paren {\forall \ell < m : \map Q \ell} \implies \map Q m$

Let $m \in \N$ be arbitrary.
Let $\phi$ be an arbitrary $\LL$-sentence with $n$ quantifiers and $m$ logical connectives.
By the definition of WFF, at least one of the following hold:

There exists an $k$-ary predicate $p$ and terms $t_1, \dotsc, t_k$ such that:
$\phi = \map p {t_1, \dotsc, t_k}$
There exists a WFF $\psi$ such that:
$\phi = \neg \psi$
There exist WFFs $\chi$ and $\psi$, as well as $\circ$ one of $\lor$, $\land$, $\implies$, or $\iff$ such that:
$\phi = \paren {\chi \circ \psi}$
Only if $n > 0$, there exists a variable $x$ and WFF $\psi$ such that:
$\phi = \paren {\forall x: \psi}$ or $\phi = \paren {\exists x: \psi}$
We will examine these case by case.


Predicate
Let $\phi = \map p {t_1, \dotsc, t_k}$.
We have:














\(\ds \map {\operatorname{val}_\MM} {\map p {t_1, \dotsc, t_k} }\)

\(=\)







\(\ds \map {P_p} {\map {\operatorname{val}_\MM} {t_1}, \dotsc, \map {\operatorname{val}_\MM} {t_k} }\)





Definition of Value of Formula under Assignment














\(\ds \)

\(=\)







\(\ds \map {P_p} {t_1, \dotsc, t_k}\)





Remark above



Suppose $\sqbrk {\map p {t_1, \dotsc, t_k}} \in T$.
By definition of $P_p$:

$\map {\operatorname{val}_\MM} {\map p {t_1, \dotsc, t_k}} = \top$
Then, by definition of $\mathrm{PL}$:

$\MM \models_{\mathrm{PL}} \map p {t_1, \dotsc, t_k}$

Now, suppose $\sqbrk {\map p {t_1, \dotsc, t_k}} \notin T$.
For the same reason:

$\map {\operatorname{val}_\MM} {\map p {t_1, \dotsc, t_k}} = \bot$
Thus:

$\MM \not\models_{\mathrm{PL}} \map p {t_1, \dotsc, t_k}$
$\Box$


Negation
Let $\phi = \neg \psi$.
As $\psi$ has fewer logical connectives than $\phi$, we can apply the second induction hypothesis:

$\psi \in T \iff \MM \models_{\mathrm{PL}} \psi$
First, suppose $\phi \notin T$.
By assumption, either $\psi \in T$ or $\sqbrk {\neg \psi} \in T$.
Thus, by Modus Tollendo Ponens:

$\psi \in T$
Therefore, by the inductive statement above:

$\MM \models_{\mathrm{PL}} \psi$
Hence:














\(\ds \map {\operatorname{val}_\MM} \phi\)

\(=\)







\(\ds \map {\operatorname{val}_\MM} {\neg \psi}\)





Assumption














\(\ds \)

\(=\)







\(\ds \map {f^\neg} {\map {\operatorname{val}_\MM} \psi}\)





Definition of Value of Formula under Assignment














\(\ds \)

\(=\)







\(\ds \map {f^\neg} \top\)





Definition of Valid Sentence (Predicate Logic)














\(\ds \)

\(=\)







\(\ds \bot\)









Therefore:

$\MM \not\models_{\mathrm{PL}} \phi$

Now, suppose:

$\phi \in T$
No $\mathrm{PL}$-structure models $\set {\psi, \neg \psi}$.
Thus, as $T$ is finitely satisfiable, and $\set {\psi, \phi}$ is finite:

$\psi \notin T$
Again, by the inductive statement:

$\MM \not\models_{\mathrm{PL}} \psi$
The same computation as above gives:

$\map {\operatorname{val}_\MM} \phi = \top$
Thus:

$\MM \models_{\mathrm{PL}} \phi$
$\Box$


Binary Connective
Let $\phi = \paren {\chi \circ \psi}$.
As both $\chi$ and $\psi$ have fewer logical connectives than $\phi$:

$\chi \in T \iff \MM \models_{\mathrm{PL}} \chi$
$\psi \in T \iff \MM \models_{\mathrm{PL}} \psi$
For the same reasons as the previous case, $T$ contains exactly one of:

$\set {\chi, \psi}$
$\set {\neg \chi, \psi}$
$\set {\chi, \neg \psi}$
$\set {\neg \chi, \neg \psi}$
Additionally, $T$ contains exactly one of:

$\phi$
$\neg \phi$
As $T$ is finitely satisfiable, they must agree according to $f^\circ$, the truth function of $\circ$.
If $\phi \in T$, then the values of $\chi$ and $\psi$ in $\MM$ must be such that $\map {\operatorname{val}_\MM} \phi = \top$.
If $\phi \notin T$, then for the same reason, $\map {\operatorname{val}_\MM} \phi = \bot$.
In both cases, we find that:

$\phi \in T \iff \MM \models_{\mathrm{PL}} \phi$


Quantifier
Again, this case does not apply if $n = 0$.
Let:

$\phi_a = \forall x : \map \psi x$
and:

$\phi_e = \exists x : \map \psi x$

First, suppose $\phi_a \in T$.
Then, for every term $t$ containing no variables:

$\map \psi {x := t} \in T$
As $\psi$ has exactly $n - 1$ quantifiers, we can apply the first induction hypothesis.
Thus, for every $t \in M$:

$\MM \models_{\mathrm{PL}} \map \psi {x := t}$
But then, as $\map {\operatorname{val}_\MM} t = t$:

$\map {\operatorname{val}_\MM} {\map \psi x} \sqbrk {\paren {x/t}} = \top$
Therefore, by definition of value of a formula:

$\map {\operatorname{val}_\MM} {\forall x: \map \psi x} = \top$
Thus:

$\MM \models_{\mathrm{PL}} \forall x: \map \psi x$

Second, suppose $\phi_e \notin T$.
Since:

$\set {\neg \exists x : \map \psi x, \neg \forall x : \neg \map \psi x}$
is finite and not satisfiable, we have:

$\sqbrk {\forall x: \neg \map \psi x} \in T$
Then, as the number of quantifiers in $\neg \map \psi x$ is the same as in $\map \psi x$, we can apply the first case above.
This gives us:

$\MM \models_{\mathrm{PL}} \forall x: \neg \map \psi x$
which states that, for every $t \in M$:

$\map {\operatorname{val}_\MM} {\neg \map \psi x} \sqbrk {\paren {x/t}} = \top$
That is, for every $t \in M$:

$\map {\operatorname{val}_\MM} {\map \psi x} \sqbrk {\paren {x/t}} = \bot$
Thus, there is no $t \in M$ for which the above results in $\top$.
By definition:

$\map {\operatorname{val}_\MM} {\exists x: \map \psi x} = \bot$
Which gives:

$\MM \not\models_\mathrm{PL} \exists x: \map \psi x$
$\Box$

For the last two cases, those being:

$\phi_a \notin T$
and:

$\phi_e \in T$
observe that the first reduces to the second in exactly the same manner as before.
Thus, we will only consider:

$\sqbrk {\exists x: \map \psi x} \in T$
By the witness property, there exists some term $t_\psi$ containing no variables such that:

$\map \psi {x := t_\psi} \in T$
By the first induction hypothesis:

$\MM \models_{\mathrm{PL}} \map \psi {x := t_\psi}$
Since $\map {\operatorname{val}_\MM} {t_\psi} = t_\psi$:

$\map {\operatorname{val}_\MM} {\map \psi x} \sqbrk {\paren {x/t_\psi}} = \top$
Thus, by definition:

$\MM \models_{\mathrm{PL}} \exists x: \map \psi x$
$\blacksquare$





