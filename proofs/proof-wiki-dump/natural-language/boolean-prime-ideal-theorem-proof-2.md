# 

Source: https://proofwiki.org/wiki/Boolean_Prime_Ideal_Theorem/Proof_2



Theorem
Let $\struct {S, \le}$ be a Boolean lattice.
Let $I$ be an ideal in $S$.
Let $F$ be a filter on $S$.
Let $I \cap F = \O$.

Then there exists a prime ideal $P$ in $S$ such that:

$I \subseteq P$
and:

$P \cap F = \O$


Proof
Let $Q$ be the set of all ideals of $S$ that are disjoint from $F$.
For each $x \in S$, define:

$C_x = \set {q \in Q : x \in q}$

We want to construct a filter $\FF$ on $Q$ such that:

$C_x \in \FF$ if and only if $x \in I$
When the filter is extended to an ultrafilter $\UU$ by the Ultrafilter Lemma, the resulting structure contains either $C_x$ or $C_{\neg x}$ for every $x \in S$

We can satisfy the first property by letting $\FF = \set {C_x : x \in I}$, but the second may not be satisfied since we could have $C_x \notin \UU$ and also $C_{\neg x} \notin \UU$.
To remedy this, we additionally include $C_x \cup C_{\neg x} \in \FF$ for every $x \in S$.
For then, given any $x \in S$ such that $C_x \notin \UU$, we can intersect its complement with $C_x \cup C_{\neg x}$ to deduce $C_{\neg x} \in \UU$.

The full proof in detail is below.

Propositions
We will first demonstrate several properties of $C_x$.
First, let $x, y \in S$ be arbitrary, with $x \le y$.
For any $q \in C_y$, we have by definition of $C_y$ that:

$y \in q$
But then, by ideal axiom $\paren 1$:

$x \in q$
and so:

$q \in C_x$
Thus:

$\paren 1 \quad x \le y \implies C_y \subseteq C_x$.

Now, let $x, y \in S$ once again be arbitrary.
By definition of the join, we have:

$x \le x \vee y$
$y \le x \vee y$
and so by $\paren 1$:

$C_{x \vee y} \subseteq C_x \cap C_y$
Conversely, let $q \in C_x \cap C_y$ be arbitrary.
Then, $x \in q$ and $y \in q$, so by Ideal is Closed under Join:

$x \vee y \in q$
and so:

$C_x \cap C_y \subseteq C_{x \vee y}$
From the above:

$\paren 2 \quad C_{x \vee y} = C_x \cap C_y$.
Finite Intersection Property
Define:

$\BB = \set {C_x : x \in I} \cup \set {C_x \cup C_{\neg x} : x \in S}$
which will be a sub-basis of $\FF$.
For that to be the case, $\BB$ must have the finite intersection property.

Let:

$G = \set {C_{x_i} : 1 \le i \le n} \cup \set {C_{y_j} \cup C_{\neg y_j} : 1 \le j \le m}$
be an arbitrary finite subset of $\BB$.
Define $\ds X = \bigvee_{i = 1}^n x_i$
By repeatedly applying $\paren 2$ above, we deduce that:

$\ds \bigcap_{i = 1}^n C_{x_i} = C_X$
By Ideal is Closed under Join:

$X \in I$
and hence:

$X \notin F$

Now, we consider the $y_j$.
For an arbitrary $k \in \set {1, \dots, m}$ and $a \notin F$, we can apply the Element Extension Lemma to find some $z_k$ such that:

either $z_k = y_k$ or $z_k = \neg y_k$
and:

$a \vee z_k \notin F$
In particular, we will choose:

$\ds a = X \vee \bigvee_{j = 1}^{k - 1} z_j$
where the $z_j$ have already been selected inductively.

After this process is completed, we will have selected $\sequence {z_j}_{1 \le j \le m}$ such that:

$\forall j: z_j \in \set {y_j, \neg y_j}$
$\ds X \bigvee_{j = 1}^m z_j \notin F$
Define:

$\ds Z = X \bigvee_{j = 1}^m z_j$
so then by Join Succeeds Operands:

$x_i \le X \le Z$
$z_j \le Z$

Let $Z^\le$ denote the lower closure of $Z$.
By Lower Closure of Element is Ideal, we then have:

$Z^\le \in Q$
which by the above remarks satisfies:

$x_i \in Z^\le$
$z_j \in Z^\le$
Therefore:

$Z^\le \in C_{x_i}$
$Z^\le \in C_{z_j} \subseteq C_{y_j} \cup C_{\neg y_j}$
for all $i, j$.
Hence:

$\ds Z^\le \in \bigcap G$
and so the intersection is indeed non-empty.

As $G$ was arbitrary, $\BB$ has the finite intersection property.
$\Box$

Ultrafilter
We can now apply the corollary to the Ultrafilter Lemma to obtain an ultrafilter $\UU$ on $Q$ such that:

$\BB \subseteq \UU$
Define:

$P = \set {x \in S : C_x \in \UU}$
Before proving that $P$ is a prime ideal, we will first demonstrate the other conditions of the theorem.

By definition of $\BB$, for every $x \in I$:

$C_x \in \BB \subseteq \UU$
and so:

$x \in P$
Thus, $I \subseteq P$ as required.

Additionally, since for each $x \in F$:

$C_x = \O$
we cannot have $C_x \in \UU$ be definition of an ultrafilter.
Hence, $P \cap F = \O$.
$\Box$

Prime Ideal
It only remains to show that $P$ is a prime ideal.
We will first show that $P$ is an ideal.
Since $P \supseteq I \ne \O$, it follows that:

$P \ne \O$
which is required by the definition of an ideal.

Let $x, y \in S$ such that $y \le x$.
If:

$x \in P$
we have by $\paren 1$ above that:

$C_y \supseteq C_x \in \UU$
and hence by filter on set axiom $\paren {\text F 4}$:

$y \in P$
which is ideal axiom $\paren 1$.

Let $x, y \in P$.
Then, $C_x, C_y \in \UU$.
By filter on set axiom $\paren {\text F 3}$, it follows that:

$C_x \cap C_y \in \UU$
But, by $\paren 2$ above:

$C_{x \vee y} = C_x \cap C_y \in \UU$
and hence:

$x \vee y \in P$
which satisfies ideal axiom $\paren 2$.
Hence, $P$ is an ideal.

Moreover, by definition of filter:

$F \ne \O$
so since:

$P \cap F = \O$
it follows that:

$P \ne S$
Therefore, $P$ is a proper ideal.

Lastly, we will show that, for each $x \in S$, either:

$x \in P$
or:

$\neg x \in P$
If $x \in S \setminus P$ is given, it follows that:

$C_x \notin \UU$
and so by definition of an ultrafilter:

$Q \setminus C_x \in \UU$

We also have:

$C_x \cup C_{\neg x} \in \BB \subseteq \UU$
so we can apply filter on set axiom $\paren {\text F 3}$ to find:

$\paren {Q \setminus C_x} \cap \paren {C_x \cup C_{\neg x}} \in \UU$
or equivalently:

$C_{\neg x} \setminus C_x \in \UU$

But for no ideal $q \in Q$ can we have:

$\set {\neg x, x} \subseteq q$
for by Ideal is Closed under Join and the definition of complement:

$\top \in q$
which contradicts $q \cap F = \O$ by Top in Filter.

Therefore:

$C_{\neg x} = C_{\neg x} \setminus C_x \in \UU$
and thus:

$\neg x \in P$
As $x \in S$ was arbitrary, we can apply Proper Ideal is Prime iff Contains Element or Complement, from which the theorem follows.
$\blacksquare$





