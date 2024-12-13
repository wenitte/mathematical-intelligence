# 

Source: https://proofwiki.org/wiki/Kuratowski%27s_Closure-Complement_Problem



Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $A \subseteq S$ be a subset of $T$.
By successive applications of the operations of complement relative to $S$ and the closure, there can be as many as $14$ distinct subsets of $S$ (including $A$ itself).


Example


Let $\R$ be the real number line with the usual (Euclidean) topology.
Let $A \subseteq \R$ be defined as:














\(\ds A\)

\(:=\)







\(\ds \openint 0 1 \cup \openint 1 2\)





Definition of Union of Adjacent Open Intervals














\(\ds \)

\(\)





\(\, \ds \cup \, \)

\(\ds \set 3\)





Definition of Singleton














\(\ds \)

\(\)





\(\, \ds \cup \, \)

\(\ds \paren {\Q \cap \openint 4 5}\)





Rational Numbers from $4$ to $5$ (not inclusive)





Proof
That there can be as many as $14$ will be demonstrated by example.

Complement
The complement of $A$ in $\R$ is given by:














\(\ds A'\)

\(=\)







\(\ds \hointl \gets 0\)





Definition of Unbounded Closed Real Interval














\(\ds \)

\(\)





\(\, \ds \cup \, \)

\(\ds \set 1\)





Definition of Singleton














\(\ds \)

\(\)





\(\, \ds \cup \, \)

\(\ds \hointr 2 3\)





Definition of Half-Open Real Interval














\(\ds \)

\(\)





\(\, \ds \cup \, \)

\(\ds \hointl 3 4\)





... adjacent to Half-Open Real Interval














\(\ds \)

\(\)





\(\, \ds \cup \, \)

\(\ds \paren {\paren {\R \setminus \Q} \cap \closedint 4 5}\)





Irrational Numbers from $4$ to $5$














\(\ds \)

\(\)





\(\, \ds \cup \, \)

\(\ds \hointr 5 \to\)





Definition of Unbounded Closed Real Interval








Interior
The interior of $A$ in $\R$ is given by:














\(\ds A^\circ\)

\(=\)







\(\ds \openint 0 1 \cup \openint 1 2\)





Union of Adjacent Open Intervals








Closure
The closure of $A$ in $\R$ is given by:














\(\ds A^-\)

\(=\)







\(\ds \closedint 0 2\)





Definition of Closed Real Interval














\(\ds \)

\(\)





\(\, \ds \cup \, \)

\(\ds \set 3\)





Definition of Singleton














\(\ds \)

\(\)





\(\, \ds \cup \, \)

\(\ds \closedint 4 5\)





Definition of Closed Real Interval








Exterior
The exterior of $A$ in $\R$ is given by:














\(\ds A^e\)

\(=\)







\(\ds \openint \gets 0\)





Definition of Unbounded Open Real Interval














\(\ds \)

\(\)





\(\, \ds \cup \, \)

\(\ds \openint 2 3 \cup \openint 3 4\)





Definition of Union of Adjacent Open Intervals














\(\ds \)

\(\)





\(\, \ds \cup \, \)

\(\ds \openint 5 \to\)





Definition of Unbounded Open Real Interval








Closure of Complement
The closure of the complement of $A$ in $\R$ is given by:














\(\ds A^{\prime \, -}\)

\(=\)







\(\ds \hointl \gets 0\)





Definition of Unbounded Closed Real Interval














\(\ds \)

\(\)





\(\, \ds \cup \, \)

\(\ds \set 1\)





Definition of Singleton














\(\ds \)

\(\)





\(\, \ds \cup \, \)

\(\ds \hointr 2 \to\)





Definition of Unbounded Closed Real Interval








Closure of Interior
The closure of the interior of $A$ in $\R$ is given by:














\(\ds A^{\circ \, -}\)

\(=\)







\(\ds \closedint 0 2\)





Definition of Closed Real Interval






Interior of Closure
The interior of the closure of $A$ in $\R$ is given by:














\(\ds A^{- \, \circ}\)

\(=\)







\(\ds \openint 0 2\)





Definition of Open Real Interval














\(\ds \)

\(\)





\(\, \ds \cup \, \)

\(\ds \openint 4 5\)





Definition of Open Real Interval








Interior of Closure of Interior
The interior of the closure of the interior of $A$ in $\R$ is given by:














\(\ds A^{\circ \, - \, \circ}\)

\(=\)







\(\ds \openint 0 2\)





Definition of Open Real Interval








Interior of Complement of Interior
The interior of the complement of the interior of $A$ in $\R$ is given by:














\(\ds A^{\circ \, \prime \, \circ}\)

\(=\)







\(\ds \openint \gets 0\)





Definition of Unbounded Open Real Interval














\(\ds \)

\(\)





\(\, \ds \cup \, \)

\(\ds \openint 2 \to\)





Definition of Unbounded Open Real Interval








Closure of Interior of Complement
The closure of the interior of the complement of $A$ in $\R$ is given by:














\(\ds A^{\prime \, \circ \, -}\)

\(=\)







\(\ds \hointl \gets 0\)





Definition of Unbounded Closed Real Interval














\(\ds \)

\(\)





\(\, \ds \cup \, \)

\(\ds \closedint 2 4\)





Definition of Closed Real Interval














\(\ds \)

\(\)





\(\, \ds \cup \, \)

\(\ds \hointr 5 \to\)





Definition of Unbounded Closed Real Interval








Closure of Interior of Closure
The closure of the interior of the closure of $A$ in $\R$ is given by:














\(\ds A^{- \, \circ \, -}\)

\(=\)







\(\ds \closedint 0 2\)





Definition of Closed Real Interval














\(\ds \)

\(\)





\(\, \ds \cup \, \)

\(\ds \closedint 4 5\)





Definition of Closed Real Interval








Interior of Complement of Interior of Closure
The interior of the complement of the interior of the closure of $A$ in $\R$ is given by:














\(\ds A^{- \, \circ \, \prime \, \circ}\)

\(=\)







\(\ds \left({\gets \,.\,.\, 0}\right)\)





Definition of Unbounded Open Real Interval














\(\ds \)

\(\)





\(\, \ds \cup \, \)

\(\ds \left({2 \,.\,.\, 4}\right)\)





Definition of Open Real Interval














\(\ds \)

\(\)





\(\, \ds \cup \, \)

\(\ds \left({5 \,.\,.\, \to}\right)\)





Definition of Unbounded Open Real Interval








Complement of Interior of Closure of Interior
The complement of the interior of the closure of the interior of $A$ in $\R$ is given by:














\(\ds A^{\circ \, - \, \circ \, \prime}\)

\(=\)







\(\ds \left({\gets \,.\,.\, 0}\right]\)





Definition of Unbounded Closed Real Interval














\(\ds \)

\(\)





\(\, \ds \cup \, \)

\(\ds \left[{2 \,.\,.\, \to}\right)\)





Definition of Unbounded Closed Real Interval









Proof of Maximum
It remains to be shown that there can be no more than $14$.

Consider an arbitrary subset $A$ of a topological space $T = \struct {S, \tau}$.
To simplify the presentation:

let $a$ be used to denote the operation of taking the complement of $A$ relative to $S$: $\map a A = S \setminus A$
let $b$ be used to denote the operation of taking the closure of $A$ in $T$: $\map b A = A^-$
let $I$ be used to denote the identity operation on $A$, that is: $\map I A = A$.
let the parentheses and the reference to $A$ be removed, so as to present, for example:
$\map a {\map b {\map a A} }$
as:
$a b a$

From Relative Complement of Relative Complement:

$\map a {\map a A} = A$
or, using the compact notation defined above:

$(1): \quad a a = I$
and from Closure of Topological Closure equals Closure:

$\map b {\map b A} = \map b A = A^-$
or, using the compact notation defined above:

$(2): \quad b b = b$

Let $s$ be a finite sequence of elements of $\set {a, b}$.
By successive applications of $(1)$ and $(2)$, it is possible to eliminate all multiple consecutive instances of $a$ and $b$ in $s$, and so reduce $s$ to one of the following forms:

$\text{a)}: \quad a b a b \ldots a$
$\text{b)}: \quad b a b a \ldots a$
$\text{c)}: \quad a b a b \ldots b$
$\text{d)}: \quad b a b a \ldots b$

From Closure of Complement of Closure is Regular Closed:

$b a b$ is regular closed.
By Interior equals Complement of Closure of Complement, the interior of $A$ is:

$a b a$
Recall the definition of regular closed:

a set $A$ is regular closed if and only if it equals the closure of its interior.
And so as $b a b$ is regular closed:

$b a b = b a b a \paren {b a b}$

So, adding an extra $b$ to either of $a b a b a b a$ or $b a b a b a$ will generate a string containing $b a b a b a b$ which can be reduced immediately to $b a b$.

It follows that the possible different subsets of $S$ that can be obtained from $A$ by applying $a$ and $b$ can be generated by none other than:

$I$
$a$
$a b$
$a b a$
$a b a b$
$a b a b a$
$a b a b a b$
$a b a b a b a$
$b$
$b a$
$b a b$
$b a b a$
$b a b a b$
$b a b a b a$
... a total of $14$.
Hence the result.
$\blacksquare$


Also known as
This result is also known as Kuratowski's Closure-Complement Theorem.


Source of Name
This entry was named for Kazimierz Kuratowski.


Sources
1922: Kazimierz Kuratowski: Sur l'operation A de l'Analysis Situs (Fundamenta Mathematicae Vol. 3: pp. 182 – 199)
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $1$: General Introduction: Closures and Interiors
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $32$. Special Subsets of the Real Line: $9$




