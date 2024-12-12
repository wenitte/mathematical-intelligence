# 

Source: https://proofwiki.org/wiki/General_Associativity_Theorem/Formulation_2



Theorem
Let $n \in \N_{>0}$ and let $a_1, \ldots, a_n$ be elements of a set $S$.
Let $\circ$ be an associative operation on $S$.
Let the set $\map {P_n} {a_1, a_2, \ldots, a_n}$ be defined inductively by:

$\map {P_1} {a_1} = \set {a_1}$
$\map {P_2} {a_1, a_2} = \set {a_1 \circ a_2}$
$\map {P_n} {a_1, a_2, \ldots, a_n} = \set {x \circ y: x \in \map {P_r} {a_1, a_2, \ldots, a_r} \land y \in \map {P_s} {a_{r + 1}, a_{r + 2}, \ldots, a_{r + s} }, n = r + s}$

Then $\map {P_n} {a_1, a_2, \ldots, a_n}$ consists of a unique entity which we can denote $a_1 \circ a_2 \circ \ldots \circ a_n$.


Proof 1
The cases where $n = 1$ and $n = 2$ are clear.
Let $a = x \circ y \in P_n: x \in P_r, y \in P_s$.
If $r > 1$ then we write $x = a_1 \circ z$ where $z = a_2 \circ a_3 \circ \ldots \circ a_r$ by induction.
Then $x \circ y = \paren {a_1 \circ z} \circ y = a_1 \circ \paren {z \circ y} = a_1 \circ \paren {a_2 \circ a_3 \circ \ldots \circ a_n}$ (again by induction).
If $r = 1$, then by induction $x \circ y = a_1 \circ y = a_1 \circ \paren {a_2 \circ a_3 \circ \ldots \circ a_n}$.
Thus in either case, $x \circ y = a_1 \circ \paren {a_2 \circ a_3 \circ \ldots \circ a_n}$ which is a single element of $P_n$.
Hence we see that $\map {P_n} {a_1, a_2, \ldots, a_n}$ consists of a single element.
$\blacksquare$


Proof 2
Proof by strong induction:
For all $n \in \N_{> 0}$, let $P \left({n}\right)$ be the proposition:

The General Associativity Theorem holds for all composites $a_1 \circ a_2 \circ \cdots \circ a_r$ such that $r \le n$.

$P \left({1}\right)$ is trivially true, as this just says $a_1 = a_1$.
$P \left({2}\right)$ is the case:

$a_1 \circ a_2 = a_1 \circ a_2$
for which there is also nothing to prove.


Basis for the Induction
$P \left({3}\right)$ is the case:

$\left({a_1 \circ a_2}\right) \circ a_3 = a_1 \circ \left({a_2 \circ a_3}\right)$
which is the definition of associativity.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $P \left({k}\right)$ is true, where $k \ge 3$, then it logically follows that $P \left({k+1}\right)$ is true.

So this is our induction hypothesis:

The General Associativity Theorem holds for all composites $a_1 \circ a_2 \circ \cdots \circ a_r$ such that $r \le k$.

Then we need to show:

The General Associativity Theorem holds for all composites $a_1 \circ a_2 \circ \cdots \circ a_r$ such that $r \le k+1$.


Induction Step
This is our induction step:
Consider the expressions:

$(1): \quad \left({a_1 \circ a_2 \circ \cdots \circ a_i}\right) \circ \left({a_{i+1} \circ a_{i+2} \circ \cdots \circ a_{k+1}}\right)$
$(2): \quad \left({a_1 \circ a_2 \circ \cdots \circ a_j}\right) \circ \left({a_{j+1} \circ a_{i+2} \circ \cdots \circ a_{k+1}}\right)$
for some $i, j \in \Z: 1 \le i, j \le k$.
We require to show that whatever the values of $i$ and $j$, these expressions are equal.

Without loss of generality, suppose that $i < j$.
Then the above expressions can be written:

$\left({a_1 \circ a_2 \circ \cdots \circ a_i}\right) \circ \left({a_{i+1} \circ a_{i+2} \circ \cdots \circ a_j}\right) \circ \left({a_{j+1} \circ a_{i+2} \circ \cdots \circ a_{k+1}}\right)$
By the basis for the induction, the General Associativity Theorem holds for each of the parts in parenthesis.
Let:

$a = \left({a_1 \circ a_2 \circ \cdots \circ a_i}\right)$
$b = \left({a_{i+1} \circ a_{i+2} \circ \cdots \circ a_j}\right)$
$c = \left({a_{j+1} \circ a_{i+2} \circ \cdots \circ a_{k+1}}\right)$
By definition of associative operation:

$\left({a \circ b}\right) \circ c = a \circ \left({b \circ c}\right)$
This demonstrates the equality of the expressions $(1)$ and $(2)$.
So $P \left({k}\right) \implies P \left({k+1}\right)$ and the result follows by the Second Principle of Mathematical Induction.

Therefore:

The General Associativity Theorem holds for all composites $a_1 \circ a_2 \circ \cdots \circ a_n$ for $n \in \N$.
$\blacksquare$





