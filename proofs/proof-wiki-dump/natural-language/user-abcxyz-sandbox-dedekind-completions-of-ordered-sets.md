# 

Source: https://proofwiki.org/wiki/User:Abcxyz/Sandbox/Dedekind_Completions_of_Ordered_Sets


This page needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Definition:Supremum-Dense
Let $\left({S, \preceq}\right)$ be an ordered set.
Let $T \subseteq S$.

Then $T$ is supremum-dense in $\left({S, \preceq}\right)$ if and only if:

$\forall x \in S: x = \sup {\left\{{y \in T: y \preceq x}\right\}}$

The dual notion is infimum-dense.


Definition:Dedekind Completion
Let $S$ be an ordered set.

The Dedekind completion of $S$ consists of a Dedekind complete ordered set $\bigl({\tilde S, \preceq}\bigr)$ and an order embedding $\phi: S \to \tilde S$ such that:

$({1}): \quad$ The image $\phi \left({S}\right)$ is supremum-dense and infimum-dense in $\bigl({\tilde S, \preceq}\bigr)$.
$({2}): \quad \forall x \in \tilde S: \exists a, b \in \phi \left({S}\right): a \preceq x \preceq b$


Characterization of Dedekind Completion
Theorem
Let $S$ be an ordered set.
Let $\bigl({\tilde S, \le}\bigr)$ be a Dedekind complete ordered set.
Let $\phi: S \to \tilde S$ be an order embedding.

Then $\bigl({\bigl({\tilde S, \le}\bigr), \phi}\bigr)$ is the Dedekind completion of $S$ iff:

For all Dedekind complete ordered sets $\left({X, \preceq}\right)$, and all order embeddings $f: S \to X$, there exists an order embedding $\tilde f: \tilde S \to X$ such that $\tilde f \circ \phi = f$.


Proof
Necessary Condition
Let $\left({X, \preceq}\right)$ be a Dedekind complete ordered set.
Let $f: S \to X$ be an order embedding.
Let $\tilde f: \tilde S \to X$ be the increasing mapping defined as:

$\forall x \in \tilde S: \tilde f \left({x}\right) = \sup {\left\{{f \left({s}\right): \phi \left({s}\right) \le x}\right\}}$
The existence of $\tilde f \left({x}\right)$ is justified by the definition of the Dedekind completion.
We have that $\tilde f \circ \phi = f$.

Let $x, y \in \tilde S$ be such that $\tilde f \left({x}\right) \preceq \tilde f \left({y}\right)$.
Then:














\(\ds x\)

\(=\)







\(\ds \sup {\left\{{\phi \left({s}\right): \phi \left({s}\right) \le x}\right\}}\)





because $\phi \left({S}\right)$ is supremum-dense in $\bigl({\tilde S, \le}\bigr)$














\(\ds \)

\(\le\)







\(\ds \inf {\left\{{\phi \left({s}\right): \phi \left({s}\right) \ge y}\right\}}\)





because $\tilde f \circ \phi = f$, and $f$ is an order embedding














\(\ds \)

\(=\)







\(\ds y\)





because $\phi \left({S}\right)$ is infimum-dense in $\bigl({\tilde S, \le}\bigr)$



Hence, $\tilde f$ is an order embedding.
$\Box$


Sufficient Condition
We show that:

$({1}): \quad$ The image $\phi \left({S}\right)$ is supremum-dense in $\bigl({\tilde S, \le}\bigr)$.
$({2}): \quad \forall x \in \tilde S: \exists b \in \phi \left({S}\right): x \le b$
The result will then follow from Dedekind Completeness is Self-Dual.

Define:

$T = \bigl\{{x \in \tilde S: x = \sup {\left\{{a \in \phi \left({S}\right): a \le x}\right\}}}\bigr.$ and $\bigl.{\exists b \in \phi \left({S}\right): x \le b}\bigr\}$
Then, by definition:

$({1}): \quad$ The image $\phi \left({S}\right)$ is supremum-dense in $\left({T, \le}\right)$.
$({2}): \quad \forall x \in T: \exists b \in \phi \left({S}\right): x \le b$
We show that $\left({T, \le}\right)$ is Dedekind complete.

Let $A \subseteq T$ be non-empty and bounded above in $\left({T, \le}\right)$.
Then $A$ admits a supremum in $\tilde S$, and, by Supremum of Suprema:

$\sup A = \sup {\left\{{a \in \phi \left({S}\right): \exists x \in A: a \le x}\right\}} \le \sup {\left\{{a \in \phi \left({S}\right): a \le \sup A}\right\}}$
It follows that $\sup A \in T$.
Hence, $\left({T, \le}\right)$ is Dedekind complete.

Let $\psi: S \to T$ denote the restriction of $\phi$ to $S \times T$.
By definition, there exists an order embedding $\epsilon: \tilde S \to T$ such that $\epsilon \circ \phi = \psi$.
It follows that:














\(\ds \forall x \in \tilde S: \epsilon \left({x}\right)\)

\(=\)







\(\ds \sup { \left\{ {\phi \left({s}\right): \phi \left({s}\right) \le \epsilon \left({x}\right)} \right\} }\)





because $\phi \left({S}\right)$ is supremum-dense in $\left({T, \le}\right)$














\(\ds \)

\(=\)







\(\ds \sup { \left\{ {\phi \left({s}\right): \phi \left({s}\right) \le \epsilon \left({\epsilon \left({x}\right)}\right) }\right\} }\)





because $\epsilon$ is an order embedding














\(\ds \)

\(=\)







\(\ds \epsilon \left({\epsilon \left({x}\right)}\right)\)





because $\phi \left({S}\right)$ is supremum-dense in $\left({T, \le}\right)$



Since $\epsilon$ is an injection, it follows that $T = \tilde S$.
$\blacksquare$


Dedekind Completion is Unique up to Isomorphism
Theorem
Let $S$ be an ordered set.
Let $\left({X, f}\right)$ and $\left({Y, g}\right)$ be Dedekind completions of $S$.

Then there exists a unique order isomorphism $\psi: X \to Y$ such that:

$\psi \circ f = g$


Proof
By Characterization of Dedekind Completion, there exist order embeddings $\tilde f: Y \to X$ and $\tilde g: X \to Y$ such that:

$\tilde f \circ g = f$
$\tilde g \circ f = g$
It follows that:

$\bigl({\tilde f \circ \tilde g}\bigr) \circ f = f$
$\bigl({\tilde g \circ \tilde f}\bigr) \circ g = g$
We have that:














\(\ds \forall x \in X: \bigl({\tilde f \circ \tilde g}\bigr) \left({x}\right)\)

\(=\)







\(\ds \sup { \bigl\{ {f \left({s}\right): f \left({s}\right) \le \bigl({\tilde f \circ \tilde g}\bigr) \left({x}\right) }\bigr\} }\)





because $f \left({S}\right)$ is supremum-dense in $X$














\(\ds \)

\(=\)







\(\ds \sup { \left\{ {f \left({s}\right): f \left({s}\right) \le x} \right\} }\)





because $\bigl({\tilde f \circ \tilde g}\bigr) \circ f = f$, and $\tilde f \circ \tilde g$ is an order embedding














\(\ds \)

\(=\)







\(\ds x\)





because $f \left({S}\right)$ is supremum-dense in $X$



Hence:

$\tilde f \circ \tilde g = \operatorname{id}_X$
Similarly:

$\tilde g \circ \tilde f = \operatorname{id}_Y$
Therefore, $\tilde g$ is an order isomorphism.

Suppose that $\psi: X \to Y$ is an order isomorphism such that:

$\psi \circ f = g$
Then:

$\bigl({\psi \circ \tilde f}\bigr) \circ g = g$
It follows that:

$\psi \circ \tilde f = \operatorname{id}_Y$
Hence:

$\psi = \psi \circ \tilde f \circ \tilde g = \tilde g$
as desired.
$\blacksquare$


Ordered Set Containing Supremum-Dense Chain is Totally Ordered
Theorem
Let $\left({S, \preceq}\right)$ be an ordered set.
Let $C$ be a chain in $S$.
Let $C$ be supremum-dense in $S$.

Then $\preceq$ is a total ordering on $S$.


Proof
Let $x, y \in S$.
By Supremum of Subset, it suffices to show that one of:

$\left\{{a \in C: a \preceq x}\right\}$, $\left\{{a \in C: a \preceq y}\right\}$
is a subset of the other.

Suppose that:

$\left\{{a \in C: a \preceq y}\right\} \nsubseteq \left\{{a \in C: a \preceq x}\right\}$
Then there exists a $b \in C$ such that $b \preceq y$ and $b \npreceq x$.
Let $a \in C$, $a \preceq x$.
If $b \preceq a$, then, by the transitivity of $\preceq$, we have $b \preceq x$, contradicting the definition of $b$.
Hence, since $C$ is a chain, we have $a \preceq b$.
By the transitivity of $\preceq$, it follows that $a \preceq y$.
That is:

$\left\{{a \in C: a \preceq x}\right\} \subseteq \left\{{a \in C: a \preceq y}\right\}$
Hence the result.
$\blacksquare$


Dedekind Completion of Totally Ordered Set is Totally Ordered
Theorem
Let $S$ be a totally ordered set.
Let $\bigl({\tilde S, \phi}\bigr)$ be a Dedekind completion of $S$.

Then $\tilde S$ is totally ordered.


Proof
This follows directly from Ordered Set Containing Supremum-Dense Chain is Totally Ordered.
$\blacksquare$





