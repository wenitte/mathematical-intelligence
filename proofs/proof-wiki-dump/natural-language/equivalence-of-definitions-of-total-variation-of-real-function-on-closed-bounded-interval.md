# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Total_Variation_of_Real_Function_on_Closed_Bounded_Interval



Theorem
The following definitions of the concept of Total Variation of Real Function on Closed Bounded Interval are equivalent:

Definition 1
Let $a, b$ be real numbers with $a < b$.
Let $f: \closedint a b \to \R$ be a function of bounded variation.
Let $\map X {\closedint a b}$ be the set of finite subdivisions of $\closedint a b$.
For each $P \in \map X {\closedint a b}$, write: 

$P = \set {x_0, x_1, \ldots, x_n}$
with:

$a = x_0 < x_1 < x_2 < \cdots < x_{n - 1} < x_n = b$
Also write:

$\ds \map {V_f} {P ; \closedint a b} = \sum_{i \mathop = 1}^n \size {\map f {x_i} - \map f {x_{i - 1} } }$

We define the total variation $\map {V_f} {\closedint a b}$ of $f$ on $\closedint a b$ by: 

$\ds \map {V_f} {\closedint a b} = \map {\sup_{P \mathop \in \map X {\closedint a b} } } {\map {V_f} {P ; \closedint a b} }$


Definition 2
Let $a, b$ be real numbers with $a < b$. 
Let $f : \closedint a b \to \R$ be a real function of bounded variation.
Let $\map {\PP_F} {\closedint a b}$ be the set of finite subsets of $\closedint a b$.
For each finite non-empty subset $\SS$ of $\closedint a b$, write: 

$\SS = \set {x_0, x_1, \ldots, x_n}$
with:

$a \le x_0 < x_1 < x_2 < \cdots < x_{n - 1} < x_n \le b$
Also write:

$\ds \map {V_f^\ast} {\SS; \closedint a b} = \sum_{i \mathop = 1}^n \size {\map f {x_i} - \map f {x_{i - 1} } }$

We define the total variation $\map {V_f} {\closedint a b}$ of $f$ on $\closedint a b$ by: 

$\ds \map {V_f} {\closedint a b} = \map {\sup_{\SS \mathop \in \map {\PP_F} {\closedint a b} } } {\map {V_f^\ast} {\SS ; \closedint a b} }$


Proof
We aim to prove that: 

$\ds \sup_{P \mathop \in \map X {\closedint a b} } \paren {\map {V_f} {P ; \closedint a b} } = \sup_{\SS \mathop \in \map {\PP_F} {\closedint a b} } \paren {\map {V_f^\ast} {\SS ; \closedint a b} }$
We will prove that: 

$\ds \sup_{P \mathop \in \map X {\closedint a b} } \paren {\map {V_f} {P ; \closedint a b} } \le \sup_{\SS \mathop \in \map {\PP_F} {\closedint a b} } \paren {\map {V_f^\ast} {\SS ; \closedint a b} }$
and:

$\ds \sup_{\SS \mathop \in \map {\PP_F} {\closedint a b} } \paren {\map {V_f^\ast} {\SS ; \closedint a b} } \le \sup_{P \mathop \in \map X {\closedint a b} } \paren {\map {V_f} {P ; \closedint a b} }$

Note that:

$\map X {\closedint a b} \subseteq \map {\PP_F} {\closedint a b}$
Note also that if $\SS$ is a finite subdivision of $\closedint a b$, we have: 

$\map {V_f} {\SS ; \closedint a b} = \map {V_f^\ast} {\SS ; \closedint a b}$
So, we have: 

$\set {\map {V_f} {P ; \closedint a b} : P \in \map X {\closedint a b} } \subseteq \set {\map {V_f^\ast} {\SS ; \closedint a b} : \SS \in \map {\PP_F} {\closedint a b} }$

So, from Supremum of Subset we obtain: 

$\ds \sup_{P \mathop \in \map X {\closedint a b} } \paren {\map {V_f} {P ; \closedint a b} } \le \sup_{\SS \mathop \in \map {\PP_F} {\closedint a b} } \paren {\map {V_f^\ast} {\SS ; \closedint a b} }$
In Equivalence of Definitions of Bounded Variation for Real Function on Closed Bounded Interval, it is shown that for each $\SS \in \map {\PP_F} {\closedint a b}$, there exists a finite subdivision $\SS^\ast \in \map X {\closedint a b}$ such that $\SS \subseteq \SS^\ast$ and: 

$\map {V_f^\ast} {\SS ; \closedint a b} \le \map {V_f} {\SS^\ast ; \closedint a b}$
which establishes: 

$\ds \sup_{\SS \mathop \in \map {\PP_F} {\closedint a b} } \paren {\map {V_f^\ast} {\SS ; \closedint a b} } \le \sup_{P \mathop \in \map X {\closedint a b} } \paren {\map {V_f} {P ; \closedint a b} }$
$\blacksquare$





