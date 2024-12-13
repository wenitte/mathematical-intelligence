# 

Source: https://proofwiki.org/wiki/User:Inconsistency/Sandbox



$[0,1] ZSH$
Angenommen $I = A \sqcup B$ und $A,B \in \mathcal O (I)$
Seien $a \in A$ und $b \in B$. oBdA $a \le b$.
Betrachte $s = inf {a<x | x \in B}$
B offen $\implies$ $s\notin B$, da sonst $\exists B(s,r)\subseteq B \implies \forall x \in (s-r,s): a < s < x \mbox{\Lightning}$.
Aus den selben gründen gilt aber auch $s \notin A$.

Seifert van Kampen
Theorem
The functor $\pi_1 : \mathbf{Top_\bullet} \to \mathbf{Grp}$ preserves pushouts of inclusions.


Proof
Let $\left(X, \tau\right)$ be a topological space.
Let $U_1,U_2 \in \tau$ such that

$U_1 \cup U_2 = X$
$U_1 \cap U_2 \ne \varnothing$ is connected
Let $\ast \in U_1 \cap U_2$ and

$i_k : U_1 \cap U_2 \hookrightarrow U_k$
$j_k : U_k \hookrightarrow U_1 \cup U_2$
be inclusions.
For the sake of simplicity let $\pi_1\left(X\right) = \pi_1\left(X, \ast\right)$.
It is to show that $\pi_1\left(X\right)$ is the amalgamated free product $\pi_1\left(U_1\right) *_{\pi_1\left(U_1 \cap U_2\right)} \pi_1\left(U_2\right)$.

$\mathbf{\pi_1\left(U_1\right) *_{\pi_1\left(U_1 \cap U_2\right)} \pi_1\left(U_2\right) \le \pi_1\left(X\right)}$

Let $\phi \in \pi_1\left(U_1\right) *_{\pi_1\left(U_1 \cap U_2\right)} \pi_1\left(U_2\right)$.
Then by definition of amalgamated free product: $\phi = \prod_{l} u_{1l} \cdot u_{2l}$ where $u_{kl} \in \pi_1\left(U_k\right)$.
Since $u_{kl} \in \pi_1\left(U_k\right) \implies u_{kl} \in \pi_1\left(U_1 \cup U_2\right)$: $\phi \in \pi_1\left(U_1 \cup U_2\right) = \pi_1\left(X\right)$.

$\mathbf{\pi_1\left(X\right) \le \pi_1\left(U_1\right) *_{\pi_1\left(U_1 \cap U_2\right)} \pi_1\left(U_2\right)}$

Let $V_1 = \operatorname{Int}\left(U_1 \setminus U_2\right)$, $V_2 = \operatorname{Int}\left(U_2 \setminus U_1\right)$.
Let $\phi_0 = \phi \in \pi_1\left(X\right)$. Then $\phi : \left[0,1\right] \to X$.
Let $s,t \in \left[0,1\right]$. $\phi(s) \in V_2 \land \phi(t) \in U_1 \cap U_2 \implies \exists s\le r \le t : \phi(r) \in \partial V_2$.
Since $U_1 \cap U_2$ is connected there exists a path $\psi : \ast \rightsquigarrow \phi(r)$.
Now define $\phi_1 = \phi_0\restriction_{\left[0,r\right]} * \psi^{-1} * \psi * \phi_0\restriction_{\left[r,t\right]}$
Since $\le$ is a wellorder we can rucurse over it and by assumption $\phi_0\restriction_{\left[0,r\right]} * \psi^{-1} \in U_1$, $\psi * \phi_0\restriction_{\left[r,t\right]} \in U_2$


Proof 1
Let $f \colon S \hookrightarrow T$, $g \colon T \hookrightarrow S$ as in the assumptions.

Using these injections one attempts to construct partitions:

$\mathfrak S \subseteq \mathcal P\left(S\right)$ and $\mathfrak T \subseteq \mathcal P\left(T\right)$
as well as a bijection:

$F \colon \mathfrak S  \hookrightarrow \hspace{-8pt} \rightarrow \mathfrak T$
and a family of bijections:

$\forall \mathfrak s\in\mathfrak S \colon \left(f_{\mathfrak s} \colon \mathfrak \hookrightarrow \hspace{-8pt} \rightarrow F\left(\mathfrak s\right)\right)$

Now there exists a bijection $\mathbf{B \colon S \hookrightarrow \hspace{-6pt} \rightarrow T}$

Define $\displaystyle B := \bigcup_{\mathfrak s \mathop\in \mathfrak S} f_{\mathfrak s}$
$B$ is left-total by Union of Left-Total Relations is Left-Total.
$B$ is right-total by Union of Right-Total Relations is Right-Total.
$B$ is many-to-one:
$\begin{align*} \mathfrak r \ne \mathfrak s \in \mathfrak S
&\implies \operatorname{Dom}\left(f_{\mathfrak r}\right) = \mathfrak r \ne \mathfrak s = \operatorname{Dom}\left(f_{\mathfrak s}\right) \\
&\implies \operatorname{Dom}\left(f_{\mathfrak r}\right) \cap \operatorname{Dom}\left(f_{\mathfrak s}\right) = \varnothing && \text{Definition of partition}
\end{align*}$

Therefore $B$ is many-to-one by Union of Many-to-One Relations with Disjoint Domains is Many-to-One.
$B$ is one-to-many:













\(\ds \mathfrak r \ne \mathfrak s \in \mathfrak S\)

\(\implies\)







\(\ds F \left(\mathfrak r\right) \ne F\left(\mathfrak s\right)\)




















\(\ds \)

\(\implies\)







\(\ds \operatorname{Im}\left(f_{\mathfrak r}\right) = \mathfrak r \ne \mathfrak s = \operatorname{Im}\left(f_{\mathfrak s}\right)\)




















\(\ds \)

\(\implies\)







\(\ds \operatorname{Im}\left(f_{\mathfrak r}\right) \cap \operatorname{Im}\left(f_{\mathfrak s}\right) = \varnothing\)





Definition of partition (see last version)



Therefore $B$ is one-to-many by Union of One-to-Many Relations with Disjoint Images is One-to-Many.
Finally note that since $F$ is bijective: $\operatorname{Im}\left(B\right) = \bigcup_{\mathfrak s \in \mathfrak S} \operatorname{Im}\left(f_{\mathfrak s}\right) = \bigcup_{\mathfrak s \in \mathfrak S} F\left(\mathfrak s\right) = \bigcup_{\mathfrak t \in \mathfrak T} \mathfrak t = T$.
$\Box$

Definition of the Partitions
By Composite of Injections is Injection: $(h_S := g\circ f) : S \hookrightarrow S$ and $(h_T := f\circ g) : T \hookrightarrow T$.
In the following denote by $X$ either $S$ or $T$ and define $\preceq_X \subseteq X^2$ by

$\langle x_1,x_2 \rangle \in \preceq_X \hspace{8pt}\Leftrightarrow\hspace{8pt} \exists n\in\N: x_2 = h_X^n x_1$
$\mathbf{\preceq_X}$ is a preorder relation

(Reflexivity)  Let $x \in X$ then $x = h_X^0 x$ $\implies x\preceq x$
(Transitivity) Let $x \preceq y$ and $y \preceq z$ then $y = h_X^m x$ and $z = h_X^n y$ $\implies z = h_X^{m+n}x \implies x\preceq z$
$\Box$
Now define $\sim_X \subseteq X^2$ by 

$\langle x_1,x_2 \rangle \in \sim_X \hspace{8pt}\Leftrightarrow\hspace{8pt} x_1\preceq x_2 \vee x_2\preceq x_1$

$\mathbf{\sim}$ is an equivalence relation

(Reflexivity) and (Symmetry) are trivial consequences of the definition of $\sim_X$ and the reflexivity of $\preceq_X$.
(Transitivity) Let $x_1,x_2,x_3\in X$ such that $x_1,x_2\preceq x_3$. Then $x_3 = h_X^m x_1 = h_X^n x_2$ for $n,m \in \N$.
Wlog assume $m\le n$. Then $x_1 = h_X^{n-m} x_2 \underset{h_X\text{ injective}}\iff h_X^m x_1 = h_X^m h_X^{n-m} x_2 \iff x_3 = h_X^n x_2$.
Therefore $x_1 \preceq x_2$.
$\Box$
Define $\mathfrak X := X/\!\!\sim$.
Now the Fundamental Theorem on Equivalence Relations implies that the equivalence classes $\mathfrak x \in \mathfrak X$ form a partition of $X$.

Definition of $F$
Denote by $\left[\!\left[{s}\right]\!\right]$ the equivalence class of $s\in S$ and define $F$ by $F\left(\left[\!\left[{s}\right]\!\right]\right) := \left[\!\left[{f\left(s\right)}\right]\!\right]$
$\mathbf F$ is well-defined and injective

Since Equivalence Class is not Empty there exists $s\in \mathfrak s$ and $\left[\!\left[{f\left(s\right)}\right]\!\right]$ exists as well.
Now it remains to show the independence of the chosen element.
$s_1,s_2\in \left[\!\left[{s}\right]\!\right]_S \iff s_1\sim_S s_2 \underset{\text{wlog}}\iff s_1 \preceq s_2 \overset{n\in\N}\iff s_2 = h_S^n s_1 = (g\circ f)^n s_1 \underset{f\text{ injective}}\iff f(s_2) = f((g\circ f)^n s_1) = f\circ(g\circ f)^n s_1 = (f\circ g)^n\circ f\ s_1 = h_T^n (f(s_1)) \iff f(s_1) \preceq_T f(s_2) \iff f(s_1) \sim_T f(s_2)$
$\Box$
$\mathbf F$ is surjective

Let $\left[\!\left[{t}\right]\!\right]_T \in T/\!\sim_T$ then $\widetilde{g}\left[\!\left[{t}\right]\!\right]_S \in S/\!\sim_S$ and obviously $\widetilde{f}\widetilde{g}(\left[\!\left[{t}\right]\!\right]_S) = \left[\!\left[{f(g(t))}\right]\!\right]_T = \left[\!\left[{h_T(t)}\right]\!\right]_T = \left[\!\left[{t}\right]\!\right]_T$.
$\Box$

Definition of the $f_{\mathfrak s}$
Let $\mathfrak s\in \mathfrak S$ and denote by $h_{\mathfrak x} := h_X\!\!\restriction_{\mathfrak x}$.
$\mathbf{\mathfrak s}$ is totally ordered

$r,s\in\mathfrak s \iff r \sim s \iff r\preceq s \vee s\preceq r$
$\Box$
s is a chain
Since Equivalence Class is not Empty and since s is a chain there exist $r \preceq s\in\mathfrak s$ that is $\exists n\in\N \colon s = h_{\mathfrak s}^n r$.
Now consider the family of functions $p_s \colon \mathfrak s \to \Z$ defined by

$p_s\left(r\right) :=
\begin{cases}

n & s = h_{\mathfrak s}^n r \\
-n & r = h_{\mathfrak s}^n s

\end{cases}
$ 

$\mathbf{s = h_{\mathfrak s}^n s \implies h_{\mathfrak s}^n = \operatorname{id}}$

Let $r\in\mathfrak s$ then by totality $r \preceq s \vee s\preceq r$.
Assume $r\preceq s$
Then $s = h_{\mathfrak s}^k r$ for some $k\in\N$.
And $r = h_{\mathfrak s}^n r \underset{h_{\mathfrak s}\text{ injective}}\iff h_{\mathfrak s}^k r = h_{\mathfrak s}^{n+k} r \iff s = h_{\mathfrak s}^n s$
Assume $s\preceq r$
Then $r = h_{\mathfrak s}^k s$ for some $k\in\N$.
And $r = h_{\mathfrak s}^n r \iff h_{\mathfrak s}^k s = h_{\mathfrak s}^{n+k} s \iff h_{\mathfrak s}^k s = h_{\mathfrak s}^k s$
So $h_{\mathfrak s}^n r = r$ for all $r \in\mathfrak s$. Therefore $h_{\mathfrak s}^n = \operatorname{id}$
$\Box$
Therefore either $\exists n\in\N \colon h_{\mathfrak s}^n = \operatorname{id}$ or $\forall $

$\mathbf{\langle\mathfrak s, \preceq\rangle \simeq \langle\Z/n\Z, \le\rangle}$ for some $\mathbf{n\in\N}$

Now one can differentiate the following two cases:
$\exists n\in\N \colon h_{\mathfrak s}^n = \operatorname{id}$

$\Box$
$\mathbf{h_{\mathfrak s}^n = \operatorname{id} \iff h_{F\left(\mathfrak s\right)}^n = \operatorname{id}}$
Therefore there exists $f_{\mathfrak s} \colon \mathbf{\langle \mathfrak s, \preceq\rangle \simeq \langle\Z/n\Z, \le\rangle \simeq \langle F\left(\mathfrak s\right), \preceq\rangle}$

$\mathbf{\mathfrak s}$ is a chain

(Totality) Let $r,s\in\mathfrak s$ then $r\sim s \implies r \preceq s \vee s\preceq r$.
(Antisymmetry) Let $r\ne s\in\mathfrak s$ then
$\Box$
s \in \left(h_S^n\right)^{-1}(r) for some r \implies f(s) \in h_T^n^-1(f(r)).
Since Equivalence Class is not Empty one can choose $r,s\in\mathfrak s$ and differentiate between the following two cases:

$\exists r,s\in\mathfrak s; n\in\N \colon s = h_S^n r$
Now $r,y\in\left[\!\left[x\right]\!\right]_X \implies r\sim y \implies r \preceq y \vee y \preceq r$.
By an abuse of notation write $y = h_X^k r$ for $k\in\Z$ and keep in mind that for $k<0$ $y = h_X^k r$ means $r = h_X^{-k} y$.
Consider two cases:


Define $n := l-k$ the smallest of such distances (which exists becaus $\N^2$ is well ordered). Then for any $y\in\left[\!\left[x\right]\!\right]_X : y = h_X^n y$.
Now define $o_r : \left[\!\left[x\right]\!\right]_X \to \Z/n\Z$ by $o_r(y) = k + n\Z$.
$\not\exists l\ne k: y=h_X^l r$
Define $o_r : \left[\!\left[x\right]\!\right]_X \to \Z = \Z/0\Z$ by $o_r(y) = k + 0\Z$.
Observe that $o_r$ is injective and surjective by construction and trivially order preserving.

$\Box$

Otherwise


Proof 2
Definition of the Partitions
$\widetilde X_0 := X$
$\widetilde X_{n+1} :=  h_X \widetilde X_n$
$\displaystyle X_0 := \bigcap_{n\mathop\in\N} X_n$
$X_{n+1} := \widetilde X_{n+1} \setminus X_n$
Define $\mathcal X := \left\{X_n\right\}_{n\mathop\in\N}$
$\mathbf{\bigsqcup \mathcal X = X}$

Let $m<n\in\N$ and $x\in X_n\cap X_m$.
...
Let $x\in X$ and assume there were no $n\in\N$ such that $x\in X_n$
...
$\Box$







Axiom of Choice
Nothing yet.


Rest
Claim
$\left[\!\left[{x}\right]\!\right]$ is a linearly ordered abelian group.
FALSCH! $\left[\!\left[{x}\right]\!\right]$ ist ein Untertyp von $\Z$!
Defin $\left[\!\left[{x}\right]\!\right]$ durch wahl eines repr r
Z = BxN
Z == r
S == h_X^n
N == n -> -n
r, h_X == N ohne repetitionen
r, h_X == Z/nZ mit -*-
=> Z/nZ <= [x]
Aber genauso [x] <= Z
Theorem: Alle Subtypen von Z haben diese Form.
Lemma: f ist ein morphismus von typen. (trivial)
Theorem: Seien S,T typen und S<=T, T<=S. Dann S==T.
Betrachte die totalordnung auf [x].
1) [x] besitzt ein minimales element => [x]
General construction: Let v : Z -> X for some set Z be injective st h|_{Im(v)} bijective.
wie wählt man Z intelligent, sodass entweder NS == S oder N = 0 ???

Proof
By Equivalence Class is not Empty one can fix an element $r\in[x]$.
And define addition ...

This definition does not depend on the choice of $r$ since if $q$ is another representative:
$q = h_X^k r$ => (x +_q y) = ... = (x +_r y)
Note that this addition is commutative by construction.
Finally observe that $\forall x,y,a:x<y \implies x+a < y+a$.
$\Box$

Claim
$\left[\!\left[{x}\right]\!\right]$ is cyclic.
Proof
It suffices to show that there exists an epimorphism $\epsilon : \Z \to \left[\!\left[{x}\right]\!\right]$.
Choose r\in[x] and define e(n) = h_X^n r.
Let y\in[x] then y\sim r => ...
$\Box$
Now [f]:[s]->[t] is a monomorphism of groups and is completely determined by [f](r). [g] analogously.
But [f] monomorph => ord([s])<=ord([t]) and ... => ord([s])=ord([t]) => [s] \simeq [t]
Since Equivalence Classes are Disjoint these $\left[\!\left[{x}\right]\!\right]_X$ form a partition of $X$ and therefor every element of $X$ belongs to exactly one element of $X/\!\sim_X$ (namely $\left[\!\left[{x}\right]\!\right]_X$).
Now define $\widetilde{f} : S/\!\sim_S \to T/\!\sim_T$ by $f(\left[\!\left[{s}\right]\!\right]_S) = \left[\!\left[{f(s)}\right]\!\right]_T$ and $\widetilde{g}$ analogous.

Claim
$\langle\left[\!\left[{x}\right]\!\right]_X, \preceq\rangle \simeq \langle\Z/n\Z, \le\rangle$ for some $n\in\N$
Proof
By Equivalence Class is not Empty one can fix $r\in\left[\!\left[x\right]\!\right]_X$.
Let $y \in \left[\!\left[x\right]\!\right]_X$ be arbitrary.
Now $r,y\in\left[\!\left[x\right]\!\right]_X \implies r\sim y \implies r \preceq y \vee y \preceq r$.
By an abuse of notation write $y = h_X^k r$ for $k\in\Z$ and keep in mind that for $k<0$ $y = h_X^k r$ means $r = h_X^{-k} y$.
Consider two cases:
$\exists l\ne k: y=h_X^l r$
Wlog assume $k<l$ then $h_X^{l-k} r = r \underset{h_X\text{ injective}}\iff h_X^kh_X^{l-k} r = h_X^kr \iff h_X^kr = h_X^kr$.
Define $n := l-k$ the smallest of such distances (which exists becaus $\N^2$ is well ordered). Then for any $y\in\left[\!\left[x\right]\!\right]_X : y = h_X^n y$.
Now define $o_r : \left[\!\left[x\right]\!\right]_X \to \Z/n\Z$ by $o_r(y) = k + n\Z$.
$\not\exists l\ne k: y=h_X^l r$
Define $o_r : \left[\!\left[x\right]\!\right]_X \to \Z = \Z/0\Z$ by $o_r(y) = k + 0\Z$.
Observe that $o_r$ is injective and surjective by construction and trivially order preserving.

$\Box$


$\blacksquare$











Notation:Differential_Geometry
Propose this new segment.
Let in the following $M$ be a smooth manifold.
$\Omega^n(M)$ - the set of all smooth n-forms on M





