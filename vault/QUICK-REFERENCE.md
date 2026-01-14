# Quick Reference Guide

## File Naming

### Daily Notes
```
2025-01-14.md
YYYY-MM-DD.md
```

### Atomic Notes
```
atomic-notes-improve-retrieval.md
links-replace-folders.md
compound-interest-accelerates-wealth.md
```

**Rules**: lowercase, hyphenated, descriptive

## Frontmatter Template

### Minimal (Recommended)
```yaml
---
title: Note Title
date: 2025-01-14
tags:
  - tag1
  - tag2
aliases:
  - alternative name
---
```

### For Projects
```yaml
---
title: Project Name
date: 2025-01-14
tags:
  - project
status: active
deadline: 2025-01-31
---
```

## Linking Syntax

### Wiki Links (Recommended for PKM)
```markdown
[[note-name]]
[[note-name|Display Text]]
[[note-name#Section]]
```

### Standard Markdown (Maximum Portability)
```markdown
[Display Text](path/to/note.md)
[Display Text](note.md#section)
```

### Images
```markdown
![alt text](Attachments/image.png)
![[image.png]]  # Obsidian wiki-link style
```

## Tag Strategies

### Hierarchical Tags
```
#area/health/exercise
#area/health/nutrition
#project/alpha
#type/literature
#status/draft
```

### Flat Tags (Alternative)
```
#health-exercise
#literature-note
#draft
```

**Guideline**: 3-10 tags per note

## Folder Decision Tree

```
New item captured...
  ├─ Has deadline? → 1-Projects/
  ├─ Ongoing responsibility? → 2-Areas/
  ├─ Reference material? → 3-Resources/
  ├─ Atomic idea/concept? → Notes/
  ├─ Daily reflection? → Daily/
  ├─ Not sure yet? → 0-Inbox/
  └─ Completed project? → 4-Archive/
```

## Weekly Review Checklist

```markdown
## Weekly Review - YYYY-MM-DD

### Inbox Processing
- [ ] Review all inbox items
- [ ] Create atomic notes from best ideas
- [ ] File project items to 1-Projects/
- [ ] File reference items to 3-Resources/
- [ ] Delete what's no longer relevant
- [ ] Inbox empty or near-empty

### Projects Review
- [ ] Review each active project
- [ ] Update status and tasks
- [ ] Archive completed projects
- [ ] Add new projects if needed

### Areas Review
- [ ] Check each area of responsibility
- [ ] Any new notes or updates needed?

### Notes Review
- [ ] Any new MOCs needed?
- [ ] Update existing MOCs
- [ ] Strengthen links between related notes

### Planning
- [ ] Set intentions for next week
```

## Template Quick Access

| Type | File | Use For |
|------|------|---------|
| Daily | `daily-note.md` | Morning/evening journal |
| Meeting | `meeting-note.md` | Meeting notes, action items |
| Literature | `literature-note.md` | Book/article notes |
| Atomic | `atomic-note.md` | Single concept notes |
| Project | `project.md` | Project planning |
| MOC | `moc.md` | Index/hub notes |

## Common Patterns

### Create an Atomic Note
1. One clear idea
2. Descriptive filename (lowercase-hyphenated)
3. Write 200-500 words in your own words
4. Add minimal frontmatter
5. Link to related notes
6. Save in `/Notes`

### Create a MOC
1. When you have 5+ notes on a topic
2. Use `moc.md` template
3. Group related notes by theme
4. Add brief context/narrative
5. Save in `/Notes` (it's just another note)

### Process Inbox Item
1. Still relevant? (No → Delete)
2. Can expand into atomic note? (Yes → `/Notes`)
3. Part of project? (Yes → `/1-Projects`)
4. Reference material? (Yes → `/3-Resources`)
5. Quick thought? (Keep processing weekly)

### Start a Project
1. Use `project.md` template
2. Define objective and success criteria
3. List tasks
4. Set deadline
5. Save in `/1-Projects/project-name/`
6. Move to `/4-Archive` when complete

## Keyboard Shortcuts (Obsidian)

| Action | Shortcut |
|--------|----------|
| Quick switcher | Cmd/Ctrl + O |
| Search | Cmd/Ctrl + Shift + F |
| Create note | Cmd/Ctrl + N |
| Insert template | Cmd/Ctrl + T |
| Follow link | Cmd/Ctrl + Click |
| Open backlinks | Cmd/Ctrl + Shift + B |

## Search Tips

### By Filename
```
filename.md
```

### By Content
```
"exact phrase"
tag:#tagname
line:(word1 word2)
```

### By Frontmatter (Obsidian)
```
tags:#project
status:active
```

## Maintenance Schedule

**Daily** (2-5 min):
- Create daily note
- Capture to inbox
- Evening reflection

**Weekly** (30 min):
- Process inbox
- Review projects
- Create/update MOCs

**Monthly** (1 hour):
- Archive completed projects
- Review areas
- System reflection

**Yearly** (2 hours):
- Major review
- Archive old areas
- Refine tag system if needed

## Red Flags

Signs you're over-organizing:
- ✗ Spending more time organizing than writing
- ✗ Creating elaborate folder hierarchies
- ✗ Adding too many plugin-specific features
- ✗ Constantly changing the system
- ✗ Numbering systems for notes (Zettelkasten IDs)

Signs you're using it right:
- ✓ Writing notes regularly
- ✓ Links emerging naturally
- ✓ Finding notes through search
- ✓ System feels invisible
- ✓ Can explain system in 2 minutes

## Emergency Recovery

**Can't find anything:**
1. Use search (Cmd/Ctrl + Shift + F)
2. Check backlinks
3. Browse MOCs
4. Check Inbox (might not be filed yet)

**System feels overwhelming:**
1. Stop adding complexity
2. Process inbox to zero
3. Archive old projects
4. Delete liberally
5. Return to basics: capture → link → review

**Tool-specific features broke:**
1. Files are still plain markdown ✓
2. Open in any text editor
3. Wiki-links show as `[[text]]` - still readable
4. Migrate gradually to another tool if needed

## Philosophy Reminders

> "Search handles 80% of retrieval"

> "Links enable emergence"

> "Folders handle workflow, not content"

> "Stop optimizing the system. Start using it."

---

**Keep this file handy for quick lookups while you learn the system.**
