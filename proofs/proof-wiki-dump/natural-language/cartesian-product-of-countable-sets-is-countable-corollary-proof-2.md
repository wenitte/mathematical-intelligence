# 

Source: https://proofwiki.org/wiki/Cartesian_Product_of_Countable_Sets_is_Countable/Corollary/Proof_2



Corollary to Cartesian Product of Countable Sets is Countable
Let $k$ be an integer such that $k > 1$.
Then the cartesian product of $k$ countable sets is countable.


Proof
Proof by induction:

Basis for the Induction
When $k = 2$, the case is the same as Cartesian Product of Countable Sets is Countable.
So shown for basis for the induction.


Induction Hypothesis
This is our induction hypothesis:

$\exists f_k: S_1 \times S_2 \times \cdots \times S_k \to \N$
where $f_k$ is an injection.
Now we need to show that for $n = k + 1$:

$\exists f_{k+1}: S_1 \times S_2 \times \cdots \times S_k \times S_{k+1} \to \N$
where $f_{k+1}$ is an injection.


Induction Step
This is our induction step:
By the induction hypothesis:

$\exists f_k: S_1 \times S_2 \times \cdots \times S_k \to \N$
where $f_k$ is an injection.
Thus by definition, $S_1 \times S_2 \times \cdots \times S_k$ is countable.
By hypothesis $S_{k + 1}$ is countable.
So by the basis for the induction:

$\exists g: \left({S_1 \times S_2 \times \cdots \times S_k}\right) \times S_{k+1} \to \N \times \N$
where $g$ is an injection.
By Cartesian Product of Countable Sets is Countable,

$\exists r: \N \times \N \to \N$
where $r$ is an injection.
Therefore, by Composite of Injections is Injection:

$f_{k+1} = r \circ g: S_1 \times S_2 \times \cdots \times S_k \times S_{k+1} \to \N$
is an injection.
The result follows by induction.
$\blacksquare$


Sources
2000: James R. Munkres: Topology (2nd ed.) ... (previous): $1$: Set Theory and Logic: $\S 7$: Countable and Uncountable Sets: Theorem $7.6$




