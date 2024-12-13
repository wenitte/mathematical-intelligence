# 

Source: https://proofwiki.org/wiki/Hall%27s_Marriage_Theorem/Finite_Set


This article needs to be linked to other articles.In particular: finite indexed family of finite sets, wherever it appearsYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $\SS = \family {S_k}_{k \mathop \in I}$ be a finite indexed family of finite sets.
For each $F \subseteq I$, let $\ds Y_F = \bigcup_{k \mathop \in F} S_k$.
Let $Y = Y_I$.

Then the following are equivalent:

$(1): \quad \SS$ satisfies the marriage condition: for each finite subset $F \subseteq I : \card F \le \card {Y_F}$.
$(2): \quad$ There exists an injection $f: I \to Y$ such that $\forall k \in I: \map f k \in S_k$.


Proof
$(2)$ implies $(1)$
Let:

$\exists P \subseteq I: \card P > \card {Y_P}$
Then:

$\card P \not \le \card {Y_P}$
By contrapositive of Injection implies Cardinal Inequality, there can be no injection from $P$ to $Y_P$.
Thus there can be no injection from $I$ to $Y$ satisfying the requirements.
$\Box$


$(1)$ implies $(2)$
The proof proceeds by induction on $n$, the cardinality of $I$.

If $n = 0$, then the empty set is the necessary injection.
Suppose the theorem holds for all $m < n$.
Let $I$ be a set with $n$ elements, where $n \ge 1$.
Let $\SS = \family {S_k}_{k \mathop \in I}$ be an indexed family of finite sets that satisfies the marriage condition.
Let $e \in I$.
Let $y \in S_e$.
Let $\SS_y = \family {S_k \setminus \set y}_{k \mathop \in I \setminus \set e}$.
By Law of Excluded Middle, one of the following must hold:

$(a): \quad \SS_y$ satisfies the marriage condition.
$(b): \quad \SS_y$ violates the marriage condition.


Case $(a)$
Suppose $\SS_y$ satisfies the marriage condition.
By Cardinality Less One:

$\card {I \setminus \set e} = n - 1 < n$
Then by the inductive hypothesis, there is an injection $\ds g: I \setminus \set e \to \bigcup \SS_y$ such that for each $k \in I \setminus \set e$, $\map g k \in S_k \setminus \set y$.
Let $f: I \to Y$ be defined thus:

$\map f k = \begin{cases}
\map g k & : k \ne e \\
y & : k = e \end{cases}$
Then $f$ is an injection satisfying the requirements.
$\Box$


Case $(b)$
Suppose $\SS_y$ does not satisfy the marriage condition.
Then there exists $P \subseteq I \setminus \set e \subsetneqq I$ such that:

$\ds \card P > \card {\bigcup_{i \mathop \in P} \paren {S_i \setminus \set y} }$
Note that $P$ cannot be empty.















\(\ds \bigcup_{i \mathop \in P} \paren {S_i \setminus \set y}\)

\(=\)







\(\ds \paren {\bigcup_{i \mathop \in P} S_i} \setminus \set y\)




















\(\ds \)

\(=\)







\(\ds Y_P \setminus \set y\)














\(\ds \leadsto \ \ \)





\(\ds \card P\)

\(>\)







\(\ds \card {Y_P \setminus \set y}\)










Since $\SS$ satisfies the marriage condition:

$\card P \le \card {Y_P}$
so $y \in Y_P$.
By Cardinality Less One:

$\card {Y_P \setminus \set y} = \card {Y_P} - 1$
Thus:

$\card P > \card {Y_P} - 1$
Thus:

$\card P = \card {Y_P}$
We have for $\card P < n$ that $P \subsetneqq I$.
So by the inductive hypothesis there is an injection $g: P \to Y_P$ such that:

$\forall k \in P: \map g k \in S_k$

It is to be shown that $\TT = \family {S_k \setminus Y_P}_{k \mathop \in I \setminus P}$ satisfies the marriage condition.
Let $Q \subseteq I \setminus P$.
We have that:

$P$ and $Q$ are disjoint sets
$\SS$ satisfies the marriage condition.
Thus:














\(\ds \card P + \card Q\)

\(=\)







\(\ds \card {P \cup Q}\)




















\(\ds \)

\(\le\)







\(\ds \card {Y_{P \cup Q} }\)




















\(\ds \)

\(=\)







\(\ds \card {Y_P} + \card {Y_Q \setminus Y_P}\)














\(\ds \leadsto \ \ \)





\(\ds \card Q\)

\(\le\)







\(\ds \card {Y_Q \setminus Y_P}\)





as $\card P = \card {Y_P}$




As this holds for all such $Q$, $\TT$ satisfies the marriage condition.
As $\card P \ne 0$, $\card {I \setminus P} < n$.
Thus there is an injection $h: I \setminus P \to Y_{I \setminus P} \setminus Y_P$ such that:

$\forall k \in I \setminus P: \map h k \in S_k \setminus Y_P$
Then $f = g \cup h$ is the injection we seek.
$\blacksquare$


Explanation
This Hall's Marriage Theorem is so called for the following reason:
Let $I$ be a set of women.
Suppose that each woman $k$ is romantically interested in a finite set $S_k$ of men.
Suppose also that:

each woman would like to marry exactly one of these men
and:

each man in $\ds \bigcup_{k \mathop \in I} S_k$ would like to marry at most one woman in $I$.
Then this theorem gives a condition under which it is possible to match every woman to a man.


Source of Name
This entry was named for Philip Hall.





