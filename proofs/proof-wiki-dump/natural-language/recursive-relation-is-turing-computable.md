# 

Source: https://proofwiki.org/wiki/Recursive_Relation_is_Turing_Computable

Theorem
Let $f: S \to \set {0, 1}$, where $S \subseteq \N^k$ be a recursive function.
Let the encoding of some $\tuple {x_1, x_2, \dotsc, x_k} \in \N^k$ be the string:

$1^{x_1} 0 1^{x_2} 0 1^{x_3} 0 \dotsm 0 1^{x_k}$
Then, there exists a Turing machine such that:

The input symbols of the machine are $\set {0, 1}$
The accepted language is the set of encodings of $\tuple {x_1, x_2, \dotsc, x_k}$ such that $\map f {x_1, x_2, \dotsc, x_k} = 1$
The machine halts on an input if and only if it is not in the correct format, or it is the encoding of some $\tuple {x_1, x_2, \dotsc, x_k}$ such that $\map f {x_1, x_2, \dotsc, x_k}$ is defined
Corollary
Let $f: S \to \set {0, 1}$, where $S \subseteq \N$ be a recursive function.
Let $x \in \N$ be encoded as:

$1 1 \dotsm 1$
where $1$ is repeated $x$ times.
Then there exists a Turing machine such that:

The input symbols of the machine are $\set 1$
The accepted language are the encodings of $x \in \N$ such that $\map f x = 1$
The machine halts on an input if and only if it is the encoding for some $x \in \N$ such that $\map f x$ is defined


Proof
Define the function $g: S' \to \set {0, 1}$, where $S \subseteq \N$, as follows:

$\map g x = \map f {\map {\operatorname{bincode} } {x, 0}, \map {\operatorname{bincode} } {x, 1}, \dotsc, \map {\operatorname{bincode} } {x, k} }$
That is, assuming the input is properly formatted, $g$ takes the value of $f$ when applied to the lengths of the strings of $1$ digits in the base-$2$ representation of the input.
Additionally, from:

Constant Function is Primitive Recursive
Primitive Recursive Function is Total Recursive Function
it follows that $g$ is recursive, as it is obtained by substitution on $f$ and other recursive functions.
By Recursive Set is Turing Computable, there exists a Turing machine $T_g$ that computes $g$.

The input is properly formatted if and only if it contains exactly $k - 1$ instances of $0$.
By Symbol Count by Finite State Machine, there is a finite state machine $F$ that accepts if and only if the number of $0$ symbols in the input is $k - 1$.
By Finite State Machine is Turing Computable, there is a Turing machine $T_F$ that always halts, which performs the same check.

The result follows from Intersection of Turing Machines with $T_g$ and $T_F$.
$\blacksquare$





