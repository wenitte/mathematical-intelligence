# 

Source: https://proofwiki.org/wiki/User:Lord_Farin/Sandbox/Archive

This page contains stuff that was in my sandbox, sitting around doing nothing, but I didn't want to delete it.




Restructuring of the logic department
This is in progress. The Definitions/Formal Systems category has been reworked for the directly relevant part. (I've let Bourbaki and some pages on Definition:String resp. Definition:Word (Formal Systems) rest for now.)
I will have to do a lot of reading in the Definitions/Logic category and its subcategories to try and bring order in the fragmentation. — Lord_Farin (talk) 12:27, 8 September 2013 (UTC)
User:Lord_Farin/Sandbox/LogicCategories will contain an attempt to classify and categorise the pages. Hopefully, it will largely overlap with the existing system. — Lord_Farin (talk) 12:24, 9 September 2013 (UTC)
The below two radical proposals seem to clear major problems with categorisation and clarity of the site. — Lord_Farin (talk) 18:09, 9 September 2013 (UTC)


Radical Proposal #1


Ditch the Category:Mathematical Logic and Category:Definitions/Mathematical Logic categories. For, most, if not all, of the material currently there is one of:

Actually more general, and applicable to either the Symbolic Logic or the Formal Systems categories;
Part of computability/recursion theory;
Applicable only to predicate logic/model theory
Now, although we have at least historical and sourced merit for pages like Definition:Mathematical Logic, the grand scheme of universal coverage that we strive for on $\mathsf{Pr} \infty \mathsf{fWiki}$ will cause us to move material presented by authors in the context of mathematical logic according to one of the three rules (particularly the first and last). We thus do not need to cripple ourselves and artificially fragment the site by forcing this mould onto our system. Please post your thoughts. — Lord_Farin (talk) 15:03, 9 September 2013 (UTC)

I understand "mathematical logic" as being a more specific category than symbolic logic but more general than formal systems. It is the general framework into which formal systems goes, and requires as its starting-point a working model of number theory. It is the category in which Godel's Theorem lies. SO I would say: keep it, make Formal Systems a subcategory of it, and make it a subcategory of Logic (or Symbolic Logic, or both), but it definitely needs to be in there as there is a wealth of literature that refers to "mathematical logic".
It may turn out, on revisiting everything in that category in turn, that everything belongs in "formal systems" or "model theory" or whatever other categories we identify as a subcategory of "mathematical logic", but this will not invalidate the existence of the category itself. --prime mover (talk) 18:34, 9 September 2013 (UTC)
I read formal systems as being more or less the most basic category. I think it could be applied to defining programming languages, e.g. letting the theorems correspond to properly compiling programs.
But since the precise (or perhaps it's better to say "intuitive") definitions of, and interplay between, "mathematical logic", "symbolic logic", and "formal system" are not universal, it's at least clear that we need to do something to separate them (if appropriate). I'll get cracking on the other radical proposal first, then conduct a literature search. — Lord_Farin (talk) 21:41, 9 September 2013 (UTC)


Radical Proposal #2


Merge Category:Propositional Logic and Category:Propositional Calculus, similarly for Category:Predicate Logic and Category:Predicate Calculus.
I have not been able to find an explanation for any distinction between these terms. They also seem to be used interchangeably, both on $\mathsf{Pr} \infty \mathsf{fWiki}$ and in sources. At least, their distinction is not clear to the reader, and I deem it not useful. We might want to rename Definition:Propositional Calculus to Definition:Language of Propositional Logic or something like that. Please also post your thoughts on this one. — Lord_Farin (talk) 18:09, 9 September 2013 (UTC)

I think I'm inclined to agree. "Language of Propositional Logic" is a propositional calculus, and the latter term can remain in, but, instead of a category, as an appropriately written definition page.
Bear in mind that some of this material dates from the very early days of $\mathsf{Pr} \infty \mathsf{fWiki}$ and we hadn't got to grips with how versatile we could structure it, so we (or I did, anyway) were constrained by what we thought were limitations of the medium. So I'm happy for that to happen. --prime mover (talk) 18:34, 9 September 2013 (UTC)

In PropLog
This section is about long-term and postponed things. For the short-term part, see User:Lord_Farin/Sandbox/PropLog.


Literature suggests that what is currently known as propositional tableaus would be more accurately described as analytic tableaus, contrasting the newly written semantic tableaus.


In due time, we will need to set up the following pages:

Definition:Translation Scheme for Language of Propositional Logic, in which back-and-forth techniques to transliterate the wffs of respective formal languages into "our" FL, and back.
This includes noting that Huth-Ryan call the "Labeled Tree WFF" associated to a "normal WFF" a parse tree. This can be used to replace the source entry for that book on Definition:Language of Propositional Logic/Labeled Tree.
Definitions for any type of semantics set out in a source using a non-official FL.
Equivalence proofs to "intertwine" the semantics in the non-official FL and the transliteration.
This will ensure complete rigour, but it's also quite... boring, to say the least. Alas, I don't see a way around it. It's kind of a basic version of what is known as "definitional equivalence" or "interdefinability" in proper model theory (where we can rely safely on a unique Prop/PredLog base): that two theories are strong enough to define each others' operations, relations, and constants.
Prolonging my thought, there may be a call for similar things in any proof-theoretical context. The nice thing is that this approach, once done, gives complete, formal (as opposed to intuitive) justification for using the PW formalisation of Prop/PredLog everywhere. Now it remains to be motivated for this massive undertaking... — Lord_Farin (talk) 19:11, 11 September 2013 (UTC)


At some point, the unique parsability of the various PropLog languages will need to be established. This will probably need some things like WFF of PropCalc is Balanced. — Lord_Farin (talk) 13:57, 16 September 2013 (UTC)


Other (mostly small) things:

Thorough inspection of correctness of links in the logic categories -- often, it's links to symbolic defs when non-symbolic is intended and vice versa. Huge entangled mess. Progress to be recorded on User:Lord_Farin/Sandbox/PropLog.
Disambiguate Definition:Truth Value and Definition:Boolean Interpretation/Truth Value.
Uniformise notation for WFFs of PropLog. We now have $\mathbf A$, $P$, $\phi$, $p$, and others. Suggestions?
It seems nice to reserve $p,q,r$ for letters. Capitals seem largely extinct and are prone to confusion with other concepts. Tradition favours $\phi$ etc., but perhaps $\mathbf A$ etc. are better. I lean towards the Greek letters, at least for PredLog. It's complicated, since the Greek letters also often stand for mappings. — Lord_Farin (talk) 13:59, 7 December 2013 (UTC)
Since you ask ... My personal preference would be $\mathbf A$ etc. This is what's used by, for example, Keisler and Robbin, which (for all of its perceived faults) is elegant in presentation. --— Lord_Farin (talk) 21:10, 21 October 2014 (UTC)

Other jobs and ideas


To separate results about strings/words from the Formal Systems category.
To graft the Bourbaki pages as just another branch onto the Formal Language/Predicate Calculus definitions tree.
To separate any symbolic treatment of logic (such as present in Definition:Converse Statement) from the Definitions/Logic category.
To move computability theory stuff out of the Category:Definitions/Mathematical Logic category as it doesn't belong there.
Disambiguate the links to Definition:Axiom.


Category:Definitions/Logical Words for the array of logical words: words in natural language that have specified mathematical-logical meaning, particularly when used in proofs.

Proof of Joining Arcs makes Another Arc?
I have the following idea for a proof. I'm not sure about what it needs to actually work just yet, but I feel that it's in the right direction (the correct ansatz, Germans would say).

Define $\RR = \left\{{\left({t, u}\right) \in I \times I: f \left({t}\right) = g \left({u}\right)}\right\}$.
Then $\RR$ is non-empty as $\left({1, 0}\right) \in \RR$.
Next, we define the relation $\preceq$ on $\RR$ by:

$\left({t, u}\right) \preceq \left({t', u'}\right)$ iff $t \le t'$ and $u' \le u$
(Include lemma proving $\preceq$ is an ordering; this is almost immediate.)

This is what I would like to be called the product ordering, as Kelley and at least a couple others do. --Dfeuer (talk) 19:29, 20 December 2012 (UTC)

Suppose now $\preceq$ has a minimal element $\left({t, u}\right)$.
Then $\left({t, u}\right) \ne \left({0, 1}\right)$, for $a \ne c$.
(Elaborate on why patching $f$ up to $t$ and $g$ from $u$ on yields arc.)

By continuity (I think I use Hausdorffness or something similar here), one can prove that every downward chain in $\RR$ has a lower bound, so an application of Zorn's Lemma shows the minimal element exists.


This page needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.

When eventually putting up the argument, I'll inverse the order sign to make Zorn's lemma more intuitively applicable.
I'd be delighted if someone could avoid AC-equivalents, or point to a resource mentioning its necessity. --Lord_Farin (talk) 14:36, 15 November 2012 (UTC)

The words and symbols are blurring before my eyes. Headspace minimal at the moment. Can do little but routine mechanical maintenance at the moment, till this project I'm on is truly finished and (most importantly) the client has paid. --prime mover (talk) 22:05, 15 November 2012 (UTC)
How about this (without AoC):
Since $T$ is Hausdorff, [...] the diagonal set $\Delta_T$ is closed in $T \times T$.
Let $F: I \times I \to T \times T$ be the mapping defined by $F \left({x, y}\right) = \left({f \left({x}\right), g \left({y}\right)}\right)$.
By [some theorem], $F$ is continuous.
Not sure what that theorem might be called, but it's trivial: $f^{-1}(U) \times g^{-1}(V) = F^{-1}(U \times V)$.
By Continuity Defined from Closed Sets, the preimage $\RR = F^{-1} \left({\Delta_T}\right)$ is closed in $I \times I$.
From the Heine–Borel Theorem, $\RR$ is compact in $I \times I$.
From Continuous Image of Compact Space is Compact, $\left\{{u - v: \left({u, v}\right) \in \RR}\right\}$ is compact in $\R$.
Note that $\RR$ is non-empty, as $\left({1, 0}\right) \in \RR$.
[...] So $\exists \left({u_0, v_0}\right) \in \RR: \forall \left({u, v}\right) \in \RR: u_0 - v_0 \le u - v$. (By the way, $\left({u_0, v_0}\right)$ is a $\preceq$-minimal element of $\RR$.)
Let $\lambda = 1 + u_0 - v_0$.
Since $a \ne c$, [...] we have $\lambda > 0$.
Let $h: I \to T$ be the mapping defined by:
$h \left({x}\right) = \begin{cases}
f \left({\lambda x}\right) &: \lambda x \le u_0 \\
g \left({\lambda x - u_0 + v_0}\right) &: \lambda x > u_0
\end{cases}$

[...] Then $h$ is an arc in $T$.
--abcxyz (talk) 01:01, 16 November 2012 (UTC)
By the way, does anyone know why "Category:Proofread" shows up so big on this (specific) page? --abcxyz (talk) 01:03, 16 November 2012 (UTC)
Nice proof (sketch)! I really like the topological approach. It appears to be correct - it's reassuring that this argument again uses Hausdorffness, strengthening the intuition that this is the right condition on $T$. As is so often the case, when specific knowledge of the ordering is at hand, one can avoid Zorn. Here it is no different. --Lord_Farin (talk) 12:32, 16 November 2012 (UTC)
Thanks; as you can see, a couple of results need to be put up first.
It seems like the double {{proofread}} is causing the unusually big size. I've removed one of them. --abcxyz (talk) 17:50, 17 November 2012 (UTC)
Although Steen and Seebach define an arc as ProofWiki does, some others use a narrower definition, requiring an arc to be homeomorphic to $[0,1]$.  See, e.g., [1].  Note that [2] attempts to point out a serious error in S&S with regard to arc connectedness, but I think may misinterpret one aspect of S&S's definition.  A response to that post, [3], states that

every Hausdorff path-connected space is arc-connected
The path is compact and metrizable (Hausdorffness helps); it is also locally connected, being the quotient of [0,1], now follow the proof of the Hahn-Mazurkiewicz theorem to construct an arc in the path that connects the begin and end points.
Assuming this is right, assuming Hausdorff in this theorem renders it silly. --Dfeuer (talk) 02:50, 21 December 2012 (UTC)

As follows from the assumption that ref. [2] is correct, the theorem is plainly false if we drop Hausdorffness (as the teleophase topology points out (which I also covered on the talk of that page)). The whole section of the site appears to be up for review. But not by me, I don't have the sources or the patience, nor do I enjoy it. I do however feel that any reworking should take place from a thorough investigation of the literature, which is to be referenced. --Lord_Farin (talk) 15:18, 21 December 2012 (UTC)
New Proof of To-be-improved part of Compact Subspace of Linearly Ordered Space
So far I'm finding this harder to understand than my own mess. --Dfeuer (talk) 23:49, 7 February 2013 (UTC)
That's a pity. I think both proofs are quite accessible. --Lord_Farin (talk) 09:03, 8 February 2013 (UTC)
It's getting a bit late so I'll skip on the house style and focus on the argument - hence, this is not for verbatim publishing.
Let $Y$ be compact, and let $S \subseteq Y$.
Let us prove that $\sup S$ exists.
Since $Y$ is totally ordered, WLOG $S$ is lower closed (for the supremum won't change). to be explicated
The case that $S$ has a greatest element is trivial; suppose it hasn't.
Suppose first that $S$ has no upper bound at all.
Thus:

$\forall y \in Y: \exists s \in S: y \prec s$
and hence:

$Y = \ds \bigcup \{{ {\downarrow} s: s \in S}\}$
Since $Y$ is compact, there exists a finite $S' \subseteq S$ such that:

$Y = \ds \bigcup \{{ {\downarrow} s: s \in S'}\}$
Let $\bar s = \max S'$, which exists as $Y$ is totally ordered (invoke result).
Then for all $s \in S'$, $\bar s \notin {\downarrow} s$, hence:

$Y \ne \ds \bigcup \{{ {\downarrow} s: s \in S'}\}$

Thus $S$ has an upper bound. Define $U = \{{y \in Y: \forall s \in S: s \prec y}\}$.
Since $S$ is lower closed, we have that $S = \ds \bigcup \{{ {\downarrow} s: s \in S}\}$ is open in $Y$.
Suppose that $U$ does not have a smallest element, i.e.:

$\forall u \in U: \exists v \in U: v \prec u$
Then it follows that $U = \ds \bigcup \{{ {\uparrow} u: u \in U}\}$ is an open cover of $U$.
Since $Y = S \cup U$ (prove), this also yields an open cover of $Y$.
Let $U' \subseteq U$ be finite such that $Y = S \cup \ds \bigcup \{{ {\uparrow} u: u \in U'}\}$
Let $\bar u = \min U'$. Then $\bar u$ is not an element of the cover, a contradiction.
Thus $U$ has a smallest element, and hence $\sup S$ exists.

That $\inf S$ exists follows by duality (formalise).
$\blacksquare$

Principle of Induction on WFFs/Structural Induction
Let $\LL$ be a formal language in an alphabet $\AA$.
Let $\FF$ be a bottom-up grammar for $\LL$.
Let $\AA^*$ be the set of all words in the alphabet $\AA$.
Let $\phi \left({\mathbf A}\right)$ be a propositional function on $\AA^*$.

Suppose that the rules of formation of $\FF$ preserve truth of $\phi$, i.e., suppose:

$(1): \phi \left({p}\right)$ is true for all letters $p$ of $\LL$
$(2):$ If a WFW $\mathbf A$ of $\LL$ is obtained from WFWs $\mathbf B_1, \ldots, \mathbf B_n$ by a rule of formation from $\FF$, then:
If $\phi \left({\mathbf B_1}\right), \ldots, \phi \left({\mathbf B_n}\right)$ are all true, then so is $\phi \left({\mathbf A}\right)$

Then $\phi \left({\mathbf A}\right)$ is true for all WFWs $\mathbf A$ of $\LL$.


Proof
Postponed until theorem statement is accredited. Note that the statement in current form assumes that all words are finite, as are all rules of formation. This is fine for our current examples, but may need generalisation in the future. Comments/thoughts? --Lord_Farin (talk) 20:51, 9 November 2012 (UTC)

You're inching closer to User:Lord_Farin/Sandbox/Archive#Ordering_Duality. This is quite exciting to me.
I saw something similar today. Namely, the induction principle for words (in Simovici and Tenni). It's much simpler than this though. I will think about it some more. --Jshflynn (talk) 21:30, 9 November 2012 (UTC)
A formal language accepting all words should reduce the theorem statement to that for words only (e.g. take concatenation as the only rule of formation, singletons as letters (that's pretty natural :) )). Considering the reference you put up: Indeed. A proof of that would most likely proceed by induction on WFFs. It could also be used to give a syntactic proof of Duality Principle (Category Theory)/Formal Duality (basically the current proof is a semantic one, referring to model-theoretic constructions: "undefined" is the key word). --Lord_Farin (talk) 21:37, 9 November 2012 (UTC)
Out of curiosity, does it matter if this theorem or proof is expressible in $\LL$? --GFauxPas (talk) 15:11, 15 November 2012 (UTC)
$\phi$ needn't be expressible in $\LL$; the global theorem statement can't, since quantification over WFWs is not allowed. I'd say the theorem is phrased in some meta-language which we agree to comprehend already (almost always, natural language plays this rôle). --Lord_Farin (talk) 15:32, 15 November 2012 (UTC)
Improvement of Sequence of Implications of Connectedness Properties
For brevity, let us introduce the following acronyms:

$\mathrm{AC}$: Arc-Connected
$\mathrm{UC}$: Ultraconnected
$\mathrm{PC}$: Path-Connected
$\mathrm{HC}$: Hyperconnected
$\mathrm C$:   Connected
Then the following sequence of implications holds:

$\begin{xy}
<-3em,3em>*+{\mathrm{AC}} = "AC",
<3em,3em>*+{\mathrm{UC}}  = "UC",
<0em,0em>*+{\mathrm{PC}}  = "PC",
<6em,0em>*+{\mathrm{HC}}  = "HC",
<3em,-3em>*+{\mathrm C}   = "C",
"AC";"PC" **@2{-} ?><>(1.2)*@2{>},
"UC";"PC" **@2{-} ?><>(1.2)*@2{>},
"PC";"C"  **@2{-} ?><>(1.2)*@2{>},
"HC";"C"  **@2{-} ?><>(1.2)*@2{>},
\end{xy}$
What do you think? Now that I have created the moulds, it will be easy to adapt to the other 'Sequences of Implication'. --Lord_Farin (talk) 10:21, 31 August 2012 (UTC)
It be noted that it will forever be impossible to endow diagrams (and indeed, any TeX rendered with MathJax) with internal links; sorry. --Lord_Farin (talk) 10:22, 31 August 2012 (UTC)

No response? :( --Lord_Farin (talk) 21:31, 7 September 2012 (UTC)
It's very nice! I don't know the first thing about what it meant, though :) --GFauxPas (talk) 21:53, 7 September 2012 (UTC)
Sorry, only just noticed it. Very nice - one caveat: you need to refer to the key to (a) work out what the codes mean, and (b) to get to the link explaining them. The somewhat clumsier page from which the original of this came does have the full map as one self-contained unit. Might be interesting to put the two presentations up on the same page as alternative renditions. --prime mover (talk) 22:21, 7 September 2012 (UTC)
Reading through the MathJax development thread revealed a way to implement internal links, contrary to my rather definitive statement above. Thus, another attempt:

$\begin{xy}\xymatrix@[email protected]{
\href{http://proofwiki.org/wiki/Definition:Arc-Connected}{\mathrm{AC}}
 \ar@2{->}[rd]

& &

\href{http://proofwiki.org/wiki/Definition:Ultraconnected}{\mathrm{UC}}
 \ar@2{->}[ld]

\\ &

\href{http://proofwiki.org/wiki/Definition:Path-Connected}{\mathrm{PC}}
 \ar@2{->}[rd]

& &

\href{http://proofwiki.org/wiki/Definition:Hyperconnected}{\mathrm{HC}}
 \ar@2{->}[ld]

\\ & &

\href{http://proofwiki.org/wiki/Definition:Connected (Topology)}{\mathrm{C}}

}\end{xy}$
I like it. Maybe the only downside is that I discovered XyJax to only work with HTML/CSS rendering (but as this is default, I don't think it'll pose a lot of problems). --Lord_Farin (talk) 11:29, 5 November 2012 (UTC)
Also, the links won't turn red when you mistype them (due to their hardcoded, non-wiki nature); it's good to be aware of that quirk. --Lord_Farin (talk) 11:30, 5 November 2012 (UTC)

Thoughts? If desired the acronyms can be expanded. --Lord_Farin (talk) 20:51, 9 November 2012 (UTC)
Thoughts? --Lord_Farin (talk) 10:07, 19 December 2012 (UTC)
Pointwise Operations on Mappings
It is probably best to put up a specific page for every instance encountered; then for intermediate generalisations (that is, pages fully generalising a certain codomain (like is being done for $\R$ now), and pages fully generalising an operation (eg., addition could be generalised to groups, maybe commutative semigroups, after that it gets awkward to speak of 'addition')), and so on building up to the abstract generality of Definition:Pointwise Operation. Benefit is that most of the proofs can be short, referring to more general ones (giving a nice inherent bound on when a certain pointwise operation is fully generalised: when the proof of a further generalisation wouldn't be identically the same). This gives the potential of, I think, in the order of one hundred pages, if not more. Not sure if I can bring the patience to repeat the same exercise over and over again, but hey, there's no deadline, so what's the problem? Just checking now if I have sensed correctly that this is a desirable direction for PW (where again, I have in mind a reader who's only familiar with a handful of objects pertaining to his field(s) of interest; at least, I want PW to be accessible for people not experts in the terminology and concepts of abstract algebra (as I note I had to become one of the latter to pick up some of the defs on PW)). So, what do you think? --Lord_Farin 17:36, 6 April 2012 (EDT)
Apologies; I have a tendency for excessive parentheses (probably originating from my mind working faster than I can type). --Lord_Farin 18:18, 6 April 2012 (EDT)

Sounds good. I note the tedium of the repetitive nature of the task - I get round this by radical copypasta and waiting till my best time of day when there isn't something more interesting / immediate cropping up. --prime mover 19:01, 6 April 2012 (EDT)
Theorem on Sigma-Algebras
$\ds \sigma \left({\bigcup_{i \mathop \in I} \sigma \left({\GG_i}\right)}\right) = \sigma \left({\bigcup_{i \mathop \in I} \GG_i}\right)$
That was the easy part; the proof is also easy. But the name isn't... Suggestions? --Lord_Farin 15:46, 16 May 2012 (EDT)

Magma of Sets
I just conceived of a name for an encapsulating notion that will allow me to cut the forest of theorems like Existence and Uniqueness of Sigma-Algebra Generated by Collection of Subsets. It is... magma of sets.
This is so named since it consists of a nonempty collection of subsets $\MM \subseteq \powerset S$ for some set $S$, such that $\MM$ is a magma for a certain set of (not necessarily binary) operators, like countable union, binary intersection, and also in particular constant mappings like, e.g., $\powerset S \to \powerset S, \Bbb S \mapsto \O$. 
The virtue of this is that any such type of magma of sets has the property that an arbitrary intersection of magmas stays a magma (provided the intersection is nonempty). Should I pursue this notion by creating pages for it or abandon the project immediately? --Lord_Farin 08:57, 10 May 2012 (EDT)

Can't get to Existence and Uniqueness of Sigma-Algebra Generated by Collection of Mappings, I'm done with it, and will put through this project. Names can always be changed if so desired. --Lord_Farin 17:35, 29 May 2012 (EDT)
User:Lord_Farin/Sandbox/Magma of Sets. --Lord_Farin 04:18, 31 May 2012 (EDT)
Now see Definition:Magma of Sets and Category:Magmas of Sets. --Lord_Farin 20:28, 4 August 2012 (UTC)
Carathéodory's Theorem
For every $A \subseteq X$, denote with $\CC \left({A}\right)$ the collection of countable $\SS$-covers $\left({S_n}\right)_{n \in \N}$.
Next, define the mapping $\mu^*: \powerset X \to \overline{\R}$ by:

$\forall A \subseteq X: \mu^* \left({A}\right) = \inf \ \left\{{\ds \sum_{n \in \N} \mu \left({S_n}\right): \left({S_n}\right)_{n \in \N} \in \CC \left({A}\right) }\right\}$
Here, it is understood that the infimum is taken in |the extended real numbers.
Hence, by Infimum of Empty Set, $\inf \varnothing = +\infty$.

Lemma 1
$\mu^*: \powerset X \to \overline{\R}$ is an outer measure.

Proof

This article is incomplete.In particular: takes one page, goes on subpageYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by expanding it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Stub}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Lemma 2
For all $S \in \SS$, have $\mu^* \left({S}\right) = \mu \left({S}\right)$

Proof

This article is incomplete.In particular: One-and-a-half pageYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by expanding it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Stub}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Next, define a collection $\AA^*$ of subsets of $X$ by:

$\AA^* := \left\{{A \subseteq X: \forall B \subseteq X: \mu^* \left({B}\right) = \mu^* \left({B \cap A}\right) + \mu^* \left({B \setminus A}\right)}\right\}$

Let $S,T \in \SS$. Then reason as follows:




\(\text {(1)}: \quad\)









\(\ds T\)

\(=\)







\(\ds \left({S \cap T}\right) \cup \left({S \setminus T}\right)\)





Set Difference and Intersection form Partition




\(\text {(2)}: \quad\)









\(\ds S \setminus T\)

\(=\)







\(\ds \bigcup_{i = 1}^n S_i\)





For pairwise disjoint $S_i$, as $\SS$ is a semi-ring








\(\ds \implies \ \ \)





\(\ds \mu^* \left({S \cap T}\right) + \mu^* \left({S \setminus T}\right)\)

\(\le\)







\(\ds \mu^* \left({S \cap T}\right) + \sum_{i = 1}^n \mu^* \left({S_i}\right)\)





$\mu^*$ is an outer measure














\(\ds \)

\(=\)







\(\ds \mu \left({S \cap T}\right) + \sum_{i = 1}^n \mu \left({S_i}\right)\)





Lemma 2














\(\ds \)

\(=\)







\(\ds \mu \left({\left({S \cap T}\right) \cup \bigcup_{i = 1}^n S_i}\right)\)





$\mu$ is a pre-measure














\(\ds \)

\(=\)







\(\ds \mu \left({T}\right)\)





By $(1), (2)$




This article is incomplete.In particular: three pages to go, excluding the proofs of the lemmataYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by expanding it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Stub}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Would the result follow from Construction of Outer Measure, Induced Outer Measure Restricted to Semiring is Pre-Measure, Elements of Semiring are Measurable with Respect to Induced Outer Measure, and Outer Measure Restricted to Measurable Sets is Measure (once the pages are finished)? Are those the lemmas needed? –Abcxyz (talk | contribs) 14:47, 23 March 2012 (EDT)

Yes, and that Measurable Sets of Outer Measure form Sigma-Algebra or whatever it is called, which is already up. --Lord_Farin 18:43, 23 March 2012 (EDT)
It is Measurable Sets form Sigma-Algebra. Should the page name be changed to what you (Lord Farin) wrote to have the explicit reference to an outer measure? –Abcxyz (talk | contribs) 19:16, 23 March 2012 (EDT)
Not at this point. That may be justified once the foundations and refactorisations are in place and we can get to properly naming pages. As of now, it would only at best be replacing the one idiosyncrasy with the other. Good job breaking this proof into multiple stages, each with merit for their own page. Do you mind posting them, too? --Lord_Farin 19:36, 23 March 2012 (EDT)
I wouldn't mind posting them. (I believe I have the proofs, unless I messed up somewhere.) Of course, I wouldn't mind anybody else posting them either. –Abcxyz (talk | contribs) 20:18, 23 March 2012 (EDT)
We're also going to have to include the part with uniqueness. By the way, I won't edit ProofWiki tomorrow because I'll be out of town. –Abcxyz (talk | contribs) 20:31, 23 March 2012 (EDT)
Uniqueness is just an application of Uniqueness of Measures; no problem there. --Lord_Farin 03:26, 24 March 2012 (EDT)

Extended Reals as Two-Point Compactification
There will be text here explaining this idea, which puts a compactifying topology on $\overline{\R}$, making the notions of diverging to $\pm \infty$ precise, and also allows for more rigorous treatment of, for example, convergence issues in measure theory.
Some search suggest that the required topology is the Definition:Order Topology, which apparently doesn't exist; I will try and write something down. Plainly, it's a topology on a toset generated by all the segments. Whoa, ideas start tumbling in, about $\max$ and $\min$, $\sup$, $\inf$ etc. etc continuous, morphisms in associated categories etc etc. I'd better be satisfied with Characterization of Measures as the milestone for today, or I won't sleep at all tonight. --Lord_Farin 18:59, 16 March 2012 (EDT)

Research done, searching for time to post the stuff. --Lord_Farin 14:42, 20 March 2012 (EDT)
Update: this project is on a stall as I lack a source of any kind; I will move it to the archive unless someone else has a source or is also knowledgeable on this, to avoid idiosyncrasies. --Lord_Farin 17:22, 30 March 2012 (EDT)
To be written:

Euclidean Space is Subspace of Extended Real Number Space
Definition:Extended Real Addition
Definition:Extended Real Multiplication
Definition:Extended Real Subtraction
Definition:Order Topology
Definition:Order-Compatible Topology (better name desired)
Definition:Order Completion
I would like to write Completion Theorem (Posets), but I haven't verified that my construction works yet; it may appear here.
Definition:Complete Poset (every ascending/descending chain has upper/lower bound)
Definition:Extended Real Number Space
Ordering on Extended Real Numbers is Total Ordering
Extended Real Numbers under Multiplication form Commutative Monoid
Extended Real Numbers under Multiplication form Monoid
Extended Real Addition is Commutative, Extended Real Addition is Associative
Extended Real Multiplication is Commutative, Extended Real Multiplication is Associative
Extended Real Number Space is Compact
Infimum of Empty Set is Greatest Element
Supremum of Empty Set is Smallest Element
Loads of pages concerning divergence to infinity can be made rigorous
An infinitude awaits
On continuous functions
Let $\left({X, \left\Vert{\cdot}\right\Vert_X}\right)$ be a Banach space, and let $\left({Y, \left\Vert{\cdot}\right\Vert_Y}\right)$ be a normed vector space.
Let $f: X \to Y$ be a continuous function.
Let $\left({x_n}\right)_{n\in\N}$ be a bounded sequence in $X$.

Suppose that $\ds \lim_{n \to \infty} f \left({x_n}\right) = y$, with $y \in Y$.
Let $f^{-1} \left({y}\right) := \left\{{x \in X: f \left({x}\right) = y}\right\}$ be the preimage of $y$ under $f$.
Assume that it is nonempty.
Then:
$\forall \epsilon > 0: \exists N \in \N: \forall n \in \N: n \ge N \implies \ds \inf_{x \in f^{-1} \left({y}\right)} \left\Vert{x_n, x}\right\Vert_X < \epsilon$


Work In ProgressIn particular: Discuss when the preimage is a single pointYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by completing it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{WIP}} from the code.

For an example where the statement does not hold, consider the function $f : \Q \to \Q$ defined by $f\left({x}\right) = x^2$ if $x \le 0$ and $f\left({x}\right) = 2 x^2$ if $x \ge 0$. Then for any Cauchy sequence $\langle {a_n} \rangle$ of rational numbers that converges to $-\sqrt 2$, we have $\ds \lim_{n\to\infty} f\left({a_n}\right) = 2$, but $f^{-1}\left({2}\right) = \left\{ {1} \right\}$.
I have a feeling that the statement is still false even if $X$ is a Banach space. As of now, I can’t prove or disprove it yet. Abcxyz 11:14, 10 March 2012 (EST)

Thanks for the comment. I will now try to write a proof. --Lord_Farin 11:23, 10 March 2012 (EST)
Disproof
Indeed, the statement is false even if $X$ is a Banach space. Here's the (dis)proof:

Consider the normed vector space $X$ over $\R$ given by the set of all continuous functions $\alpha : [0, 1] \to [0, 1]$, equipped with the supremum norm $\ds \left\Vert {\alpha} \right\Vert_{\infty} = \sup_{x\in [0, 1]} \alpha\left({x}\right)$.

We now show that $X$ is a Banach space over $\R$. It remains to show that $X$ is a complete metric space.
Let $\alpha_1, \alpha_2, \alpha_3, \ldots: [0, 1] \to [0, 1]$ be a Cauchy sequence of continuous functions. (Here, the metric used is the metric induced by the supremum norm.)
Let $\ds \alpha = \lim_{n\to\infty} \alpha_n$. It remains to show that $\alpha$ is continuous.
Let $\epsilon > 0$.
Then there exists an $N$ such that for all $n > N$, $\left\Vert \alpha_n - \alpha \right\Vert_{\infty} < \epsilon$.
By the definition of supremum norm, for all $x \in [0, 1]$, $\left\vert \alpha_n\left({x}\right) - \alpha\left({x}\right) \right\vert < \epsilon$.
Hence $\alpha$ is continuous by the Uniform Limit Theorem.

Now, consider the function $f : X \to [0, 1]$ defined by $\ds f\left({\alpha}\right) = \int_0^1 \alpha\left({x}\right) \,\mathrm{d}x$. We now show that $f$ is continuous.
Let $\alpha_0 \in X$, and let $\alpha \in X$ be such that $\left\Vert \alpha - \alpha_0 \right\Vert_{\infty} < \epsilon$.
Then:















\(\ds \left\vert f\left({\alpha}\right) – f\left({\alpha_0}\right) \right\vert\)

\(=\)







\(\ds \left\vert { \int_0^1 \left[ { \alpha \left( {x} \right) - \alpha_0 \left( {x} \right) } \right] \,\mathrm{d}x } \right\vert\)




















\(\ds \)

\(\le\)







\(\ds \int_0^1 \left\vert \alpha\left({x}\right) - \alpha_0\left({x}\right) \right\vert \,\mathrm{d}x\)





by the triangle inequality














\(\ds \)

\(<\)







\(\ds \int_0^1 \epsilon\,\mathrm{d}x\)




















\(\ds \)

\(=\)







\(\ds \epsilon\)









Hence $f$ is continuous.

(Now for the counter-example to the statement.)
The pre-image of $\left\{ {0} \right\}$ under $f$ is the zero function.
Consider the sequence of continuous functions $\alpha_1, \alpha_2, \alpha_3, \ldots : [0, 1] \to [0, 1]$ defined by $\alpha_n\left({x}\right) = \max \left\{ {0, 1 - nx} \right\}$.
A straightforward calculation yields $\ds \lim_{n\to\infty} f\left({\alpha_n}\right) = 0$.
However, $\left\Vert \alpha_n \right\Vert_{\infty} = 1$ for all $n \in \N$.
$\blacksquare$
Abcxyz 12:21, 10 March 2012 (EST)

Remark
The problem (or whatever you want to call it) with the sequence $\alpha_1, \alpha_2, \alpha_3, \ldots$ used in the above (dis)proof was that it does not have a convergent subsequence. Maybe instead of assuming that the sequence $\langle {x_n} \rangle$ is bounded, we can assume that it has a convergent subsequence? Perhaps this could be the next guess? Abcxyz 12:53, 10 March 2012 (EST)

Thanks for this very detailed disproof of my assertion. Assuming a convergent subsequence won't work because we can riffle in the zero function on the even places in $x_n$ and repeat the argument above. Assuming a convergent subsequence does in fact allow to prove that $\ds\liminf_{n\to\infty}\left\Vert{x_n-f^{-1} \left({y}\right)}\right\Vert = 0$; but that's a very weak statement. More thought is needed. --Lord_Farin 14:20, 10 March 2012 (EST)
I think I have the best statement possible: if the subsequence $x_{n_r}$ converges, then $\ds\lim_{r\to\infty} x_{n_r} \in f^{-1}\left({y}\right)$. Verification is straightforward; now to think of uses. --Lord_Farin 14:23, 10 March 2012 (EST)
My purported proof of Joining Arcs makes Another Arc (cf. User:Lord_Farin/Sandbox) appears to use some version of this result in one way or another. --Lord_Farin (talk) 14:49, 15 November 2012 (UTC)
Specific cases
How about the case where $X$ is a Euclidean space? Does the statement hold in that case? Any thoughts?
(I have a feeling that the statement does actually hold in that case, but of course I might be dead wrong.) Abcxyz 15:39, 10 March 2012 (EST)

Interesting thought. I thought of an example that shows it is at least required, even in this case, to assume that the sequence is bounded. Namely, define:
$f \left({x}\right) = \begin{cases}0 & \text{if } x \in \N \text{ or } x\le 0\\
\frac1{n+1} & \text{if }x = n + \dfrac12 \text{ with } n \in \N\end{cases}$

and subsequently by straight line segments between these points. The sequence forming a counterexample is $x_n = n+\dfrac12$.
Returning to the case where the sequence is bounded, I think it may be possible to create a 'partition of subsequences' which covers the whole sequence and whose limits are of course the preimages of $y$. To avoid the axiom of choice and cases where the preimage set isn't discrete, probably the sequences (even their indices) shouldn't be assumed disjoint. I will need to think about this some more, but it appears to work (assuming the function to be defined on some closed subset of $\R^n$ to ensure no problems occur at the boundaries with nasty asymptotic behaviour). --Lord_Farin 18:11, 10 March 2012 (EST)

Actually, I think the statement holds in the case that every closed ball in $X$ is sequentially compact.
Let $\left(X, \left\Vert \cdot \right\Vert \right)$ be a Banach space satisfying the above property, and let $\left(Y, d\right)$ be a metric space.
Since we only concern ourselves with bounded sequences $\langle {x_n} \rangle$ in $X$, we may assume the function $f$ is defined on some closed ball in $X$ which the sequence $\langle {x_n} \rangle$ is constrained to be in.
Suppose that the statement is false. Then there exists an $\epsilon > 0$ such that there exist arbitrarily large $n$ with $\ds \inf_{x \in f^{-1}\left({y}\right)}\left\Vert {x_n - x}\right\Vert \ge \epsilon$.
Therefore, there exists a subsequence $\langle {x_p} \rangle$ of $\langle {x_n} \rangle$ such that for all $p \in \N$, $\ds \inf_{x \in f^{-1}\left({y}\right)} \left\Vert {x_p - x} \right\Vert \ge \epsilon$.
By the definition of sequential compactness, there exists a convergent subsequence $\langle {x_q} \rangle$ of $\langle {x_p} \rangle$.
For all $q \in \N$, $\ds \inf_{x \in f^{-1}\left({y}\right)} \left\Vert {x_q - x} \right\Vert \ge \epsilon$.
Let $\ds x^\star = \lim_{q \to \infty} x_q$.
By the continuity of $f$, we have $y = f\left({x^\star}\right)$.
By the definition of pre-image, $x^\star \in f^{-1}\left({y}\right)$.
But then there exists a $q \in \N$ such that $\left\Vert {x_q – x^\star} \right\Vert < \epsilon$, contradicting the assumption that $\ds \inf_{x \in f^{-1}\left({y}\right)} \left\Vert {x_q - x} \right\Vert \ge \epsilon$ for all $q \in \N$.
Hence the statement holds.
$\blacksquare$
Abcxyz 21:41, 10 March 2012 (EST)

So, if $\left( {X, \left\Vert \cdot \right\Vert} \right)$ is a Banach space, $\left( {Y, d} \right)$ is a metric space, and the terms of the sequence $\langle {x_n} \rangle$ are members of a sequentially compact subset of $X$, then the statement holds. Abcxyz 22:59, 10 March 2012 (EST)

I came to the rather similar conclusion that the property holds for any sequence in a complete, sequentially compact metric space. My proof is quite analogous and also is a proof by contradiction. I haven't ever seen any similar result even stated; however, I can imagine that it's sometimes useful when the preimage is a single point. Anyone else ever saw a result similar to this? --Lord_Farin 10:56, 11 March 2012 (EDT)
Note that any sequentially compact metric space is automatically complete. --Lord_Farin 18:14, 13 March 2012 (EDT)
Hope you don't mind - I updated the links to Preimage so as to be consistent with the refactoring. --prime mover 05:11, 18 March 2012 (EDT)




