# 

Source: https://proofwiki.org/wiki/Offset_URM_Program_is_Primitive_Recursive

Theorem
There exists a primitive recursive function $\operatorname {Offset} : \N^2 \to \N$ such that, for $e, k \in \N$:

If $e$ does not code a URM program, then $\map {\operatorname {Offset} } {e, k} = 0$.
If $e$ codes a URM program $P$, then $\map {\operatorname {Offset} } {e, k}$ codes a program $P'$, with the following properties:
$(1): \quad$ Every basic instruction of $P'$ with line number $i \in \closedint 1 k$ is $\map C {0,0}$.
$(2): \quad$ Every Jump instruction in $P'$ is of the form $\map J {m,n,q}$, where $q > k$.
$(3): \quad$ $P$ and $P'$ compute the same function.


Proof
The basic instructions of $P'$ will be defined as:

$P'_i = \begin{cases}
\map C {1,1} & : i \le k \\
P_{i - k} & : i > k \land P_{i - k} \notin \texttt {Jump} \\
\map J {m,n,q + k} & : i > k \land P_{i - k} = \map J {m,n,q}
\end{cases}$
Property $(1)$ holds by the first case.
Property $(2)$ holds as each Jump instruction has $q > 0$ by definition, so $q + k > k$ follows.

For Property $(3)$, compare the $j$-th stage of $P$ to the $j + k$-th of $P'$.
Fix the input values for the registers.
By induction, show that, if the $j$-th stage of $P$ has instruction pointer $i$, then the $j + k$-th stage of $P'$ has instruction pointer $i + k$ and exactly the same register values.
As each $\map C {1,1}$ instruction does not change the values of the registers, the $k$-th stage of $P'$ has the same register values as the $0$-th stage of $P$, when the inputs are the same.
Additionally, since the instruction pointers are $1$ and $1 + k$, respectively, the basis for the induction is satisfied.

Now, suppose the hypothesis holds.
Since the instruction pointer for $P'$ is $i + k > k$, the first case of the definition of $P'_{i + k}$ does not hold.
If $P_i \notin \texttt {Jump}$, then $P$ and $P'$ execute the same instruction on the same register values, resulting in the same register values once again.
The instruction pointers then proceed to $i + 1$ and $i + 1 + k$, respectively.
If $P_i = \map J {m,n,q} \in \texttt {Jump}$, then $P'_{i + k} = \map J {m,n,q + k}$.
If $R_m = R_n$ in $P$, then the same holds in $P'$ by assumption.
In that case, then, the next instruction pointers are $q$ and $q + k$, respectively.
If $R_m \ne R_n$, the same holds, and the instruction pointers become $i + 1$ and $i + 1 + k$.

In every case, it can be seen that the induction hypothesis is satisfied for $j + 1$.
Thus, by Principle of Mathematical Induction, the same holds for every state.
Therefore, either both $P$ and $P'$ output the same value, or they both fail to terminate.
Thus, Property $(3)$ holds.
$\Box$

The above definition for $P'_i$ can be regarded as a function $\map I {e,k,i}$ that produces the code for $P'_i$.
That function is primitive recursive by:

Definition by Cases is Primitive Recursive
Ordering Relations are Primitive Recursive
Set of Codes for URM Instructions is Primitive Recursive, in particular Jinstr
Set Operations on Primitive Recursive Relations
Constant Function is  Primitive Recursive, in particular $\map \beta {\map C {0,0} } = 2^1 \times 3^1 + 1 = 7$
Cut-Off Subtraction is Primitive Recursive, as $i - k = i {\dot -} k$ whenever $i > k$
As $\map \beta {\map J {m,n,q + k} } = 2^m \times 3^n \times 5^{q + k} + 2$:
Exponentiation is Primitive Recursive
Multiplication is Primitive Recursive
Addition is Primitive Recursive
Constant Function is  Primitive Recursive
Cut-Off Subtraction is Primitive Recursive and Prime Exponent Function is Primitive Recursive, as $m = \paren {e_i - 2}_1$, and likewise for $n$ and $q$

Thus, the function $\operatorname {Offset}$ is given by:

$\map {\operatorname {Offset} } {e,k} = \begin{cases}
\prod_{i = 1}^{\map {\operatorname {len} } e + k} {\map p i}^{\map I {e,k,i} } & : e \in \texttt{Prog} \\
0 & : \text {otherwise}
\end{cases}$
which is primitive recursive by:

Definition by Cases is Primitive Recursive/Corollary
Set of Codes for URM Programs is Primitive Recursive
Bounded Product is Primitive Recursive
Length Function is Primitive Recursive
Prime Enumeration Function is Primitive Recursive
Addition is Primitive Recursive
Exponentiation is Primitive Recursive
Constant Function is Primitive Recursive
$\blacksquare$





